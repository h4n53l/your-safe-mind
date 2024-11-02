export interface IUser {
    _id: string;
    name: string;
    email: string;
    clerkUserId: string;
    isApproved: boolean;
    isSuperAdmin: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface IDoctor {
    _id: string;
    name: string;
    email: string;
    phone: string;
    specializations: string[];
    startTime: string;
    endTime: string;
    workDays: string[];
    fee: number;
    bio: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface IPatient {
    _id: string;
    name: string;
    email: string;
    phone: string;
    age: number;
    gender: string;
    problem?: string;
  }
  
  export interface IAppointment {
    _id: string;
    date: string;
    time: string;
    doctor: IDoctor;
    patient: IPatient;
    specialist: string;
    fee: number;
    paymentId: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }