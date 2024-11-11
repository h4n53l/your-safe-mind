import PageTitle from "@/components/page-title";
import { getDashboardData } from "@/server-actions/dashboard-reports";
import { Alert } from "antd";
import React, { Suspense } from "react";
import DashboardCard from "./_components/dashboard-card";
import AppointmentsTable from "../appointments/_components/appointments-table";
import ServerComponentsSpinner from "@/components/server-components-spinner";



async function DashboardPage() {
  const { success, data }: any = await getDashboardData();
  if (!success) {
    return (
      <Alert
        message="Failed to fetch dashboard data, please try again later"
        showIcon
      />
    );
  }

  return (
    <div className="p-5 flex flex-col gap-5">
      <PageTitle title="Dashboard" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
        <DashboardCard
          title="Today's Appointments"
          value={data?.todayAppointmentsCount || 0}
          description="Total appointments booked today"
        />

        <DashboardCard
          title="All Appointments"
          value={data?.allAppointmentsCount || 0}
          description="Total appointments booked till now"
        />

        <DashboardCard
          title="All Doctors"
          value={data?.allDoctorsCount || 0}
          description="Total doctors registered in the system"
        />

        <DashboardCard
          title="All Patients"
          value={data?.allPatientsCount || 0}
          description="Total patients registered till now"
        />
      </div>

      <div className="mt-7">
        <h1 className="text-sm font-bold">Today's Appointments</h1>
        <AppointmentsTable appointments={data?.todayAppointmentsData} />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<ServerComponentsSpinner />}>
      <DashboardPage />
    </Suspense>
  );
}