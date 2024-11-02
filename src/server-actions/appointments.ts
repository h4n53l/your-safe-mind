"use server";
import { IPatient } from "@/interfaces";
import AppointmentModel from "@/model/appointment-model";
import DoctorModel from "@/model/doctor-model";
import PatientModel from "@/model/patient-model";

import dayjs from "dayjs";
import { revalidatePath } from "next/cache";

export const checkDoctorsAvailability = async ({
  date,
  time,
  specialist,
}: {
  date: string;
  time: string;
  specialist: string;
}) => {
  try {
    // get the doctor ids which are booked on the given date and time
    const bookedDoctorIds = await AppointmentModel.find({
      date,
      time,
      status: "approved",
    }).distinct("doctor");

    // get the doctors by eliminating the above ids and by checking the specialist
    const availableDoctors = await DoctorModel.find({
      _id: { $nin: bookedDoctorIds },
      specializations: { $in: [specialist] },
      workDays: { $in: [dayjs(date).format("dddd").toLowerCase()] },
      startTime: { $lte: time },
      endTime: { $gt: time },
    });

    return {
      success: true,
      data: JSON.parse(JSON.stringify(availableDoctors)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const saveAppointment = async ({
  patientDetails,
  date,
  time,
  doctorId,
  specialist,
  fee,
  paymentId,
}: {
  patientDetails: Partial<IPatient>;
  date: string;
  time: string;
  doctorId: string;
  specialist: string;
  fee: number;
  paymentId: string;
}) => {
  try {
    // save patient details and get the patient id
    let patient = await PatientModel.findOne({
      name: patientDetails.name,
      gender: patientDetails.gender,
      $or: [{ email: patientDetails.email }, { phone: patientDetails.phone }],
    });

    if (!patient) {
      patient = await PatientModel.create(patientDetails);
    } else {
      await PatientModel.updateOne({ _id: patient._id }, patientDetails);
    }

    // save appointment details with the patient id
    const appointment = await AppointmentModel.create({
      date,
      time,
      doctor: doctorId,
      patient: patient._id,
      specialist,
      fee,
      paymentId,
      status: "approved",
    });

    return {
      success: true,
      data: JSON.parse(JSON.stringify(appointment)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getAppointmentById = async (id: string) => {
  try {
    const appointment = await AppointmentModel.findById(id)
      .populate("doctor")
      .populate("patient");

    return {
      success: true,
      data: JSON.parse(JSON.stringify(appointment)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getAllAppointments = async (searchParams: {
  date: string;
  patientName: string;
  doctorName: string;
}) => {
  try {
    const { date, patientName='', doctorName='' } = searchParams;
    let mainFilters: any = {};
    if (date) {
      mainFilters.date = date;
    }

    const [doctorIds, patientIds] = await Promise.all([
      DoctorModel.find({
        name: { $regex: doctorName, $options: "i" },
      }).distinct("_id"),
      PatientModel.find({
        name: { $regex: patientName, $options: "i" },
      }).distinct("_id"),
    ]);

    if (doctorIds.length) {
      mainFilters.doctor = { $in: doctorIds };
    }

    if (patientIds.length) {
      mainFilters.patient = { $in: patientIds };
    }
    const appointments = await AppointmentModel.find(mainFilters)
      .populate("doctor")
      .populate("patient")
      .sort({ createdAt: -1 });
    return {
      success: true,
      data: JSON.parse(JSON.stringify(appointments)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const updateAppointmentStatus = async ({
  appointmentId,
  status,
}: {
  appointmentId: string;
  status: string;
}) => {
  try {
    const appointment = await AppointmentModel.findByIdAndUpdate(
      appointmentId,
      { status },
      { new: true }
    );
    revalidatePath("/admin/appointments");

    return {
      success: true,
      data: JSON.parse(JSON.stringify(appointment)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getAppointmentByPatientId = async (patientId: string) => {
  try {
    const appointments = await AppointmentModel.find({ patient: patientId })
      .populate("doctor")
      .sort({ createdAt: -1 });

    return {
      success: true,
      data: JSON.parse(JSON.stringify(appointments)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};