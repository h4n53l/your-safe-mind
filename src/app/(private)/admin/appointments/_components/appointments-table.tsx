"use client";

import { getDateTimeFormat } from "@/helpers/date-time-formats";
import { IPatient, IDoctor, IAppointment } from "@/interfaces";
import { Button, Table } from "antd";
import { Eye, X } from "lucide-react";
import React from "react";
import dayjs from "dayjs";
import ViewAppointmentModal from "./view-appointment-modal";
import CancelAppointmentModal from "./cancel-appointment-modal";

interface AppointmentsTableProps {
  appointments: IAppointment[];
}

function AppointmentsTable({ appointments }: AppointmentsTableProps) {
  const [showViewAppointmentModal, setShowViewAppointmentModal] =
    React.useState(false);
  const [showCancelAppointmentModal, setShowCancelAppointmentModal] =
    React.useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    React.useState<IAppointment | null>(null);
  const columns = [
    {
      title: "Patient Name",
      dataIndex: "patient",
      render: (patient: IPatient) => patient.name,
    },
    {
      title: "Doctor Name",
      dataIndex: "doctor",
      render: (doctor: IDoctor) => doctor.name,
    },
    {
      title: "Specialist",
      dataIndex: "specialist",
      render: (specialist: string) => specialist.toUpperCase(),
    },
    {
      title: "Date & Time",
      dataIndex: "date",
      render: (date: string, row: IAppointment) =>
        getDateTimeFormat(`${date} ${row.time}`),
    },
    {
      title: "Fee",
      dataIndex: "fee",
      render: (fee: number) => `$${fee}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => status.toUpperCase(),
    },
    {
      title: "Payment ID",
      dataIndex: "paymentId",
    },
    {
      title: "Booked On",
      dataIndex: "createdAt",
      render: (createdAt: string) => getDateTimeFormat(createdAt),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text: string, record: IAppointment) => {
        let showCancelBtn = false;
        const isCancelled = record.status === "cancelled";
        const isPast = dayjs(
          `${record.date} ${record.time}`,
          "YYYY-MM-DD HH:mm A"
        ).isBefore(dayjs());
        return (
          <div className="flex gap-5">
            <Button
              icon={<Eye size={12} />}
              size="small"
              onClick={() => {
                setSelectedAppointment(record);
                setShowViewAppointmentModal(true);
              }}
            >
              View
            </Button>
            {!isPast && !isCancelled && (
              <Button
                icon={<X size={12} />}
                size="small"
                onClick={() => {
                  setSelectedAppointment(record);
                  setShowCancelAppointmentModal(true);
                }}
              >
                Cancel
              </Button>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={appointments} rowKey="_id" />
      {selectedAppointment && (
        <ViewAppointmentModal
          {...{
            showViewAppointmentModal,
            setShowViewAppointmentModal,
            appointment: selectedAppointment!,
          }}
        />
      )}

      {selectedAppointment && (
        <CancelAppointmentModal
          {...{
            showCancelAppointmentModal,
            setShowCancelAppointmentModal,
            appointment: selectedAppointment!,
          }}
        />
      )}
    </div>
  );
}

export default AppointmentsTable;