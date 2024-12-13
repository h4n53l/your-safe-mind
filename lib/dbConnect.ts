import mongoose from 'mongoose';

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    return;
  }

  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error('Please define MONGODB_URI in .env.local');
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export default dbConnect;