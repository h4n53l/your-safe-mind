"use client";

import { specializations } from "@/constants";
import { Button, Input, Select } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

function FilterDoctors() {
  const [search, setSearch] = React.useState("");
  const [speciality, setSpeciality] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const router = useRouter();

  const onFilter = () => {
    router.push(`/admin/doctors?search=${search}&speciality=${speciality}&phone=${phone}`);
  };

  const onClearFilters = () => {
    setSearch("");
    setSpeciality("");
    setPhone("");
    router.push("/admin/doctors");
  };

  return (
    <div className="grid lg:grid-cols-4 gap-5 items-end">
      <div className="flex flex-col">
        <label htmlFor="Search" className="text-sm">
          Search
        </label>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="Speciality" className="text-sm">
          Speciality
        </label>
        <Select
          options={specializations}
          value={speciality}
          onChange={(value) => setSpeciality(value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="Phone" className="text-sm">
          Phone
        </label>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
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

export default FilterDoctors;