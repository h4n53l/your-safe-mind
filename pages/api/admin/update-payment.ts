// pages/api/admin/update-payment.ts
import dbConnect from '@/lib/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import Booking from '@/models/Booking';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id, paid } = req.body;

  try {
    await dbConnect();
    const booking = await Booking.findByIdAndUpdate(
      id,
      { paid },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    return res.status(200).json(booking);
  } catch (error) {
    console.error('Update error:', error);
    return res.status(500).json({ error: 'Failed to update payment status' });
  }
}