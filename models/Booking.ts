import mongoose, { Document, Schema } from 'mongoose';
import { IBooking } from '../types/booking';

export interface IBookingDocument extends IBooking, Document {}

const bookingSchema = new Schema<IBookingDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  serviceType: { type: String, required: true },
  symptom: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Booking || mongoose.model<IBookingDocument>('Booking', bookingSchema);