"use client";

import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

function FilterAppointments() {
  const [date, setDate] = React.useState("");
  const [patientName, setPatientName] = React.useState("");
  const [doctorName, setDoctorName] = React.useState("");
  const router = useRouter();

  const onFilter = () => {
    router.push(
      `/admin/appointments?date=${date}&patientName=${patientName}&doctorName=${doctorName}`
    );
  };

  const onClearFilters = () => {
    setDate("");
    setPatientName("");
    setDoctorName("");
    router.push("/admin/appointments");
  };

  return (
    <div className="grid lg:grid-cols-4 gap-5 items-end">
      <div className="flex flex-col">
        <label htmlFor="Search" className="text-sm">
          Appointment Date
        </label>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="Speciality" className="text-sm">
          Doctor Name
        </label>
        <Input
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="Phone" className="text-sm">
          Patient Name
        </label>
        <Input
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-5">
        <Button onClick={onClearFilters}>Clear Filters</Button>
        <Button type="primary" onClick={onFilter}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
}

export default FilterAppointments;