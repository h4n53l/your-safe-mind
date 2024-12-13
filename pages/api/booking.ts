import type { NextApiRequest, NextApiResponse } from 'next';
import Booking from '../../models/Booking';
import { IBooking } from '../../types/booking';
import dbConnect from '@/lib/dbConnect';

type ApiResponse = {
  success?: boolean;
  error?: string;
  data?: IBooking;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await dbConnect();
    const booking = await Booking.create(req.body);
    return res.status(201).json({ success: true, data: booking });
  } catch (error) {
    return res.status(400).json({ error: error instanceof Error ? error.message : 'Unknown error occurred' });
  }
}