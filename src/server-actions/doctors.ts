"use server";

import { IDoctor } from "@/interfaces";
import DoctorModel from "@/model/doctor-model";
import { revalidatePath } from "next/cache";

export const addDoctor = async (payload: Partial<IDoctor>) => {
  try {
    await DoctorModel.create(payload);
    revalidatePath("/admin/doctors");
    return {
      success: true,
      message: "Doctor added successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getDoctors = async (searchParams: {
  search: string;
  speciality: string;
  phone: string;
}) => {
  try {
    let filtersToApply: any = {};

    if (searchParams.search) {
      filtersToApply.name = { $regex: searchParams.search, $options: "i" };
    }

    if (searchParams.speciality) {
      filtersToApply.specializations = { $in: [searchParams.speciality] };
    }

    if (searchParams.phone) {
      filtersToApply.phone = searchParams.phone;
    }

    const doctors = await DoctorModel.find(filtersToApply).sort({ createdAt: -1 });
    return {
      success: true,
      data: JSON.parse(JSON.stringify(doctors)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getDoctorById = async (id: string) => {
  try {
    const doctor = await DoctorModel.findById(id);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(doctor)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const updateDoctor = async ({
  id,
  data,
}: {
  id: string;
  data: Partial<IDoctor>;
}) => {
  try {
    await DoctorModel.findByIdAndUpdate(id, data);
    revalidatePath("/admin/doctors");
    return {
      success: true,
      message: "Doctor updated successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const deleteDoctor = async (id: string) => {
  try {
    await DoctorModel.findByIdAndDelete(id);
    revalidatePath("/admin/doctors");
    return {
      success: true,
      message: "Doctor deleted successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};