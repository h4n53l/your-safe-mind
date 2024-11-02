import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
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
    specializations: {
      type: [],
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    workDays: {
      type: [],
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

if (mongoose.models && mongoose.models.doctors) delete mongoose.models.doctors;

const DoctorModel = mongoose.model("doctors", doctorSchema);
export default DoctorModel;