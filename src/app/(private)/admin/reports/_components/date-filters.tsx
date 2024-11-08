"use client";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React from "react";

function DateFiltersForReports() {
  const [fromDate, setFromDate] = React.useState<string>(
    dayjs().format("YYYY-MM-DD")
  );
  const [toDate, setToDate] = React.useState<string>(
    dayjs().format("YYYY-MM-DD")
  );
  const router = useRouter();

  const getDataHandler = () => {
    router.push(`/admin/reports?fromDate=${fromDate}&toDate=${toDate}`);
  };

  return (
    <div className="flex gap-5 items-end">
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="From Date">
          From date
        </label>
        <Input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm" htmlFor="To Date">
          To date
        </label>
        <Input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>

      <Button type="primary" onClick={getDataHandler}>
        Get Data
      </Button>
    </div>
  );
}

export default DateFiltersForReports;