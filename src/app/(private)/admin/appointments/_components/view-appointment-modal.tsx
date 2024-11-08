import AppointmentReceipt from "@/app/(public)/appointment-confirmation/_components/appointment-receipt";
import { IAppointment } from "@/interfaces";
import { Modal } from "antd";
import React from "react";

interface ViewAppointmentModalProps {
  appointment: IAppointment;
  showViewAppointmentModal: boolean;
  setShowViewAppointmentModal: (value: boolean) => void;
}

function ViewAppointmentModal({
  appointment,
  showViewAppointmentModal,
  setShowViewAppointmentModal,
}: ViewAppointmentModalProps) {
  if (!showViewAppointmentModal) return null;
  return (
    <Modal
      open={showViewAppointmentModal}
      onClose={() => setShowViewAppointmentModal(false)}
      onCancel={() => setShowViewAppointmentModal(false)}
      centered
      footer={null}
      title="View Appointment"
      width={600}
    >
      <div className="mt-10">
        {" "}
        <AppointmentReceipt appointment={appointment} />
      </div>
    </Modal>
  );
}

export default ViewAppointmentModal;