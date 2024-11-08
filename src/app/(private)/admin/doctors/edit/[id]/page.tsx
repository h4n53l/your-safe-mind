import PageTitle from "@/components/page-title";
import React, { Suspense } from "react";
import DoctorForm from "../../_components/doctor-form";
import { getDoctorById } from "@/server-actions/doctors";
import { Alert } from "antd";
import ServerComponentsSpinner from "@/components/server-components-spinner";

interface EditDoctorPageProps {
  params: {
    id: string;
  };
}

async function EditDoctorPage({ params }: EditDoctorPageProps) {
  const { success, data } = await getDoctorById(params.id);
  if (!success) {
    return (
      <Alert
        message="Failed to fetch doctor , please try again later"
        showIcon
      />
    );
  }

  const doctor = data;
  return (
    <div className="p-5">
      <PageTitle title="Edit Doctor" />
      <DoctorForm type="edit" initialValues={doctor} />
    </div>
  );
}

export default function Page(props: EditDoctorPageProps) {
  return (
    <Suspense fallback={<ServerComponentsSpinner />}>
      <EditDoctorPage {...props} />
    </Suspense>
  );
}