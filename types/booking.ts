// types/booking.ts
export interface IBooking {
    name: string;
    email: string;
    date: Date;
    time: string;
    serviceType: string;
    symptom?: string;
    createdAt?: Date;
  }