import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    problem: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

if (mongoose.models && mongoose.models.patients) {
  delete mongoose.models.patients;
}

const PatientModel = mongoose.model("patients", patientSchema);
export default PatientModel;