import { IDoctor } from "@/interfaces";
import React from "react";

interface AvailableDoctorsProps {
  doctorsList: IDoctor[];
  selectedDoctor: IDoctor | null;
  setSelectedDoctor: (doctor: IDoctor) => void;
}

function AvailableDoctors({
  doctorsList,
  selectedDoctor,
  setSelectedDoctor,
}: AvailableDoctorsProps) {
  return (
    <div className="mt-7">
      <h1 className="text-primary text-sm font-bold">
        Available doctors for the given date and time
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {doctorsList.map((doctor) => (
          <div
            className={`p-3 border cursor-pointer flex gap-5 rounded items-center ${
              selectedDoctor?._id === doctor._id ? "border-primary border-2" : "border-gray-300"
            }`}
            onClick={() => setSelectedDoctor(doctor)}
          >
            <img
              src={doctor.profilePicture}
              className="w-20 h-24 rounded object-cover"
            />

            <div className="flex flex-col gap-1">
              <h1 className="text-sm font-semibold uppercase">{doctor.name}</h1>
              <p className="text-xs text-gray-600 capitalize">
                {doctor.specializations.join(", ")}
              </p>

              <hr />

              <p className="text-sm">
                Cunsultaion Fee : <b>$ {doctor.fee}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableDoctors;