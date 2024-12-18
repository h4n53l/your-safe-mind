// pages/api/admin/bookings.ts
import dbConnect from '@/lib/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import Booking from '@/models/Booking'; // We'll create this model

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    const bookings = await Booking.find({})
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json(bookings);
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Failed to fetch bookings' });
  }
}