import crypto from 'crypto'


export const generateBookingId = () => {
    // Generate an 8-character alphanumeric ID
    return crypto.randomBytes(4).toString('hex').toUpperCase();
  };