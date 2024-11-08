"use client";
import { Button, Input, Select } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

function FilterUsers() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isApproved, setIsApproved] = React.useState(true);
  const router = useRouter();

  const onFilter = () => {
    router.push(
      `/admin/users?name=${name}&email=${email}&isApproved=${isApproved}`
    );
  };

  const onClearFilters = () => {
    setName("");
    setEmail("");
    setIsApproved(true);
    router.push("/admin/users");
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
          Email
        </label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="gender" className="text-sm">
          Is Approved ?
        </label>
        <Select
          options={[
            {
              label: "Yes",
              value: true,
            },
            {
              label: "No",
              value: false,
            },
          ]}
          value={isApproved}
          onChange={(value) => setIsApproved(value)}
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

export default FilterUsers;