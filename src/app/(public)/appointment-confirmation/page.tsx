"use client";
import PageTitle from "@/components/page-title";
import { IAppointment } from "@/interfaces";
import { getAppointmentById } from "@/server-actions/appointments";
import { Button, Input, message } from "antd";
import React, { Suspense, useEffect, useRef } from "react";
import AppointmentReceipt from "./_components/appointment-receipt";
import { useSearchParams } from "next/navigation";

function AppointmentConfirmationContent() {
  const searchParams = useSearchParams();

  const [appointmentId, setAppointmentId] = React.useState(
    searchParams.get("id") || ""
  );
  const [loading, setLoading] = React.useState(false);
  const [appointment, setAppointment] = React.useState<IAppointment | null>(
    null
  );


  const sendAppointmentEmail = async () => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: appointment!.patient.email,
          subject: "Your Safe Mind Appointment",
          appointmentDetails: appointment,
          isPatient: true,
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Email sent successfully!");
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert("Failed to send email: " + error);
    } finally {
      setLoading(false);
    }
  };

  const componentRef: any = useRef();

  const getData = async () => {
    try {
      setLoading(true);
      const { data, success } = await getAppointmentById(appointmentId);
      if (success) {
        setAppointment(data);
      } else {
        message.error("No appointment found with the given ID");
      }
    } catch (error) {
      message.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (appointmentId) {
      getData();
    }
  }, [searchParams]);

  return (
    <div className="p-5 flex flex-col items-center gap-7">
      <div className="justify-center flex">
        <PageTitle title="Appointment Confirmation" />
      </div>

      <div className="w-[600px] flex justify-center">
        <div className="flex justify-between gap-5 items-end w-full">
          <div className="w-full">
            <label className="text-sm">Appointment ID</label>
            <Input
              value={appointmentId}
              onChange={(e) => setAppointmentId(e.target.value)}
              className="w-full"
            />
          </div>

          <Button type="primary" loading={loading} onClick={getData}>
            Search
          </Button>
        </div>
      </div>

      <div ref={componentRef} className="flex justify-center mt-5">
        <div className="w-[600px]">
          {appointment && <AppointmentReceipt appointment={appointment!} />}
        </div>
      </div>
      {appointment && (
        <div className="flex justify-center gap-5 w-[600px]">
          <Button type="primary" onClick={sendAppointmentEmail}>
            Email Appointment Receipt
          </Button>
        </div>
      )}
    </div>
  );
}

// export default AppointmentConfirmation

export default function AppointmentConfirmation() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppointmentConfirmationContent />
    </Suspense>
  )
};
