import PageTitle from "@/components/page-title";
import { getReportsData } from "@/server-actions/dashboard-reports";
import { Alert } from "antd";
import React, { Suspense } from "react";
import DateFiltersForReports from "./_components/date-filters";
import dayjs from "dayjs";
import DashboardCard from "../dashboard/_components/dashboard-card";
import AppointmentsTable from "../appointments/_components/appointments-table";

interface ReportsPageProps {
  searchParams: {
    fromDate: string;
    toDate: string;
  };
}

async function ReportsPage({ searchParams }: ReportsPageProps) {
  const { success, data } = await getReportsData({
    fromDate: searchParams.fromDate || dayjs().format("YYYY-MM-DD"),
    toDate: searchParams.toDate || dayjs().format("YYYY-MM-DD"),
  });

  if (!success) {
    return (
      <Alert message="Failed to fetch reports data" type="error" showIcon />
    );
  }
  return (
    <div className="p-5 flex flex-col gap-5">
      <PageTitle title="Reports" />

      <DateFiltersForReports />

      <div className="grid lg:grid-cols-3 gap-4">
        <DashboardCard
          title="Total appointments"
          value={data?.appointmentsCount || 0}
          description={`Total appointments count in selected date range`}
        />

        <DashboardCard
          title="Fee collected"
          value={`$${data?.feeCollected || 0}`}
          description={`Total consultation fee collected in selected date range`}
        />
      </div>

      <div>
        <h1 className="text-sm font-bold">
          Appointments data in selected date range
          {searchParams.toDate}
        </h1>

        <AppointmentsTable appointments={data?.appointmentsData || []} />
      </div>
    </div>
  );
}

export default function Page(props: any) {
  return (
    <Suspense>
      <ReportsPage {...props} />
    </Suspense>
  );
}