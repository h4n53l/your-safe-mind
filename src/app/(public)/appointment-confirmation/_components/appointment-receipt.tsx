import { getDateTimeFormat } from "@/helpers/date-time-formats";
import { IAppointment } from "@/interfaces";
import React from "react";

interface IAppointmentReceiptProps {
  appointment: IAppointment;
}

function AppointmentReceipt({ appointment }: IAppointmentReceiptProps) {
  const renderProperty = (label: string, value: any) => (
    <div className="flex justify-between text-sm">
      <p className="font-semibold ml-2">{label}</p>
      <p>{value}</p>
    </div>
  );

  return (
    <div className="w-full">
      <div className="p-5 border border-primary rounded-sm flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl text-pretty uppercase">
            Your Safe Mind
          </h1>

          <div className="text-sm">
            <p>Appointment ID: </p>
            <p>{appointment._id}</p>
          </div>
        </div>

        <hr />

        <h1 className="bg-gray-300 uppercase py-2 px-3 mt-5">
          Appointment Details
        </h1>

        <div className="flex flex-col gap-2 mt-5">
          {renderProperty("Doctor", appointment.doctor.name)}
          {renderProperty("Specialist", appointment.specialist.toUpperCase())}
          {renderProperty("Date", appointment.date)}
          {renderProperty("Time", appointment.time)}
          {renderProperty("Fee", `£ ${appointment.fee}`)}
          {renderProperty("Status", appointment.status.toUpperCase())}
          {renderProperty("Patient Name", appointment.patient.name)}
          {renderProperty("Patient Email", appointment.patient.email)}
          {renderProperty("Patient Phone", appointment.patient.phone)}
          {renderProperty(
            "Booked On",
            getDateTimeFormat(appointment.createdAt)
          )}
        </div>
      </div>
    </div>
  );
}

export default AppointmentReceipt;
