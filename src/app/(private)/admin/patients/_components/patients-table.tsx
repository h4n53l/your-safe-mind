"use client";
import { IPatient } from "@/interfaces";
import { Button, Table } from "antd";
import { Trash2, Pen, List } from "lucide-react";
import React from "react";
import PatientAppointmentModal from "./patient-appointments-modal";

interface PatientsTableProps {
  patients: IPatient[];
}

function PatientsTable({ patients }: PatientsTableProps) {
  const [showPatientAppointmentModal, setShowPatientAppointmentModal] =
    React.useState(false);
  const [selectedPatient, setSelectedPatient] = React.useState<IPatient | null>(
    null
  );
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text: any, record: any) => (
        <div className="flex gap-5">
          <Button size="small">
            <Trash2 size={14} />
          </Button>

          <Button size="small">
            <Pen size={14} />
          </Button>

          <Button
            size="small"
            onClick={() => {
              setSelectedPatient(record);
              setShowPatientAppointmentModal(true);
            }}
          >
            <List size={14} /> View Appointments
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Table
        dataSource={patients}
        columns={columns}
        rowKey="_id"
        pagination={false}
      />

      {selectedPatient && showPatientAppointmentModal && (
        <PatientAppointmentModal
          selectedPatient={selectedPatient}
          showPatientAppointmentModal={showPatientAppointmentModal}
          setShowPatientAppointmentModal={setShowPatientAppointmentModal}
        />
      )}
    </div>
  );
}

export default PatientsTable;