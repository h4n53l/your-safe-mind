import PageTitle from "@/components/page-title";
import { getAllPatients } from "@/server-actions/patients";
import { Alert } from "antd";
import React, { Suspense } from "react";
import FilterPatients from "./_components/filter-patients";
import PatientsTable from "./_components/patients-table";
import ServerComponentsSpinner from "@/components/server-components-spinner";

interface PatientsListProps {
  searchParams: {
    name: string;
    phone: string;
    gender: string;
  };
}

async function PatientsList({ searchParams }: PatientsListProps) {
  const { success, data } = await getAllPatients(searchParams);
  if (!success) {
    return <Alert message="Failed to fetch patients" type="error" showIcon />;
  }

  const patients = data;
  return (
    <div className="p-5 flex flex-col gap-5">
      <PageTitle title="Patients" />

      <FilterPatients />

      <PatientsTable patients={patients} />
    </div>
  );
}

export default function Page(props: any) {
  return (
    <Suspense fallback={<ServerComponentsSpinner />}>
      <PatientsList {...props} />;
    </Suspense>
  );
}