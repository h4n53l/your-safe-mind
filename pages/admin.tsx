// pages/admin/index.tsx
import LoadingComponent from '@/components/LoadingComponent';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');


  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/admin/bookings');
      const data = await response.json();
      setBookings(data);
      setFilteredBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentUpdate = async (id: string, paid: number) => {
    try {
      const response = await fetch('/api/admin/update-payment', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, paid }),
      });

      if (response.ok) {
        const updatedBookings = bookings.map((booking: any) =>
          booking._id === id ? { ...booking, paid } : booking
        );
        setBookings(updatedBookings);
        setFilteredBookings(updatedBookings);
      }
    } catch (error) {
      console.error('Error updating payment:', error);
      alert('Failed to update payment status');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        const response = await fetch(`/api/admin/delete-booking?id=${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          const updatedBookings = bookings.filter((booking: any) => booking._id !== id);
          setBookings(updatedBookings);
          setFilteredBookings(updatedBookings);
        } else {
          throw new Error('Failed to delete booking');
        }
      } catch (error) {
        console.error('Error deleting booking:', error);
        alert('Failed to delete booking');
      }
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    
    const filtered = bookings.filter((booking: any) => 
      booking.name.toLowerCase().includes(searchTerm) ||
      booking.email.toLowerCase().includes(searchTerm)
    );
    setFilteredBookings(filtered);
  };

  const handleSort = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
    
    const sorted = [...filteredBookings].sort((a: any, b: any) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return newDirection === 'asc' ? dateA - dateB : dateB - dateA;
    });
    
    setFilteredBookings(sorted);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (isLoading) return (
      <LoadingComponent/>
)


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center text-green-600 font-bold mb-6">Booking Management</h1>
      
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-green-300 focus:border-green-300"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Booking ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left cursor-pointer" onClick={handleSort}>
                Date {sortDirection === 'asc' ? '↑' : '↓'}
              </th>
              <th className="px-6 py-3 text-left">Time</th>
              <th className="px-6 py-3 text-left">Service</th>
              <th className="px-6 py-3 text-left">Payment</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredBookings.map((booking: any) => (
              <tr key={booking._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono">{booking.bookingId}</td>
                <td className="px-6 py-4">{booking.name}</td>
                <td className="px-6 py-4">{booking.email}</td>
                <td className="px-6 py-4">{new Date(booking.date).toLocaleDateString()}</td>
                <td className="px-6 py-4">{booking.time}</td>
                <td className="px-6 py-4">{booking.serviceType}</td>
                <td className="px-6 py-4">
                  <input
                    type="number"
                    value={booking.paid}
                    onChange={(e) => handlePaymentUpdate(booking._id, Number(e.target.value))}
                    className="w-24 px-2 py-1 border rounded"
                  />
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}