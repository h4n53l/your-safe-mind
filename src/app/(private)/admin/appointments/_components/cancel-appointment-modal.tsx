import { IAppointment } from "@/interfaces";
import { updateAppointmentStatus } from "@/server-actions/appointments";
import { Alert, Button, message, Modal } from "antd";
import React from "react";

interface CancelAppointmentModalProps {
  showCancelAppointmentModal: boolean;
  setShowCancelAppointmentModal: (value: boolean) => void;
  appointment: IAppointment;
}

function CancelAppointmentModal({
  showCancelAppointmentModal,
  setShowCancelAppointmentModal,
  appointment,
}: CancelAppointmentModalProps) {
  const [loading, setLoading] = React.useState(false);

  const handleCancelAppointment = async () => {
    try {
      setLoading(true);
      const { success, message: msg } = await updateAppointmentStatus({
        appointmentId: appointment._id,
        status: "cancelled",
      });
      if (!success) {
        throw new Error(msg);
      }
      message.success("Appointment cancelled successfully");
      setShowCancelAppointmentModal(false);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="CANCEL APPOINTMENT"
      open={showCancelAppointmentModal}
      onCancel={() => setShowCancelAppointmentModal(false)}
      onClose={() => setShowCancelAppointmentModal(false)}
      centered
      footer={null}
    >
      <Alert
        message={
          <p className="text-sm">
            Are you sure you want to cancel the appointment with{" "}
            <b>{appointment.doctor.name}</b> on <b>{appointment.date}</b> at{" "}
            <b>{appointment.time}</b> of <b>{appointment.patient.name}</b> ?
          </p>
        }
        type="warning"
      />

      <div className="mt-5 flex justify-end gap-5">
        <Button disabled={loading}>Close</Button>
        <Button
          danger
          type="primary"
          loading={loading}
          onClick={handleCancelAppointment}
        >
          Yes , Cancel Appointment
        </Button>
      </div>
    </Modal>
  );
}

export default CancelAppointmentModal;