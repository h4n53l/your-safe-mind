"use client";
import { Button, Input, Select } from "antd";
import React from "react";
import { useRouter } from "next/navigation";

const genders = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

function FilterPatients() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const router = useRouter();

  const onFilter = () => {
    router.push(`/admin/patients?name=${name}&phone=${phone}&gender=${gender}`);
  };

  const onClearFilters = () => {
    setName("");
    setPhone("");
    setGender("");
    router.push("/admin/patients");
  };

  return (
    <div className="grid lg:grid-cols-4 gap-5 items-end">
      <div className="flex flex-col">
        <label htmlFor="Search" className="text-sm">
          Name
        </label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="text-sm">
          Phone
        </label>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="gender" className="text-sm">
          Gender
        </label>
        <Select
          options={genders}
          value={gender}
          onChange={(value) => setGender(value)}
          className="w-full"
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

export default FilterPatients;