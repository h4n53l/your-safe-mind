import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctors",
      required: true,
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patients", // todo: create patient model
      required: true,
    },
    specialist: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "approved",
    },
    fee: {
      type: Number,
      required: true,
    },
    paymentId : {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

if (mongoose.models && mongoose.models.appointments) {
  delete mongoose.models.appointments;
}

const AppointmentModel = mongoose.model("appointments", appointmentSchema);
export default AppointmentModel;