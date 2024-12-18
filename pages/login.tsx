import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Login failed');
      }

      router.push('/admin');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative group transition-all duration-300 ease-in-out max-w-md w-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-green-500 to-green-300 
                      rounded-2xl blur-lg opacity-25 group-hover:opacity-100 
                      transition duration-1000 group-hover:duration-200 
                      animate-gradient"></div>
        
        <div className="relative px-8 py-10 bg-white rounded-xl">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Admin Login</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-300 
                         focus:border-green-300 transition-all duration-200 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-300 
                         focus:border-green-300 transition-all duration-200 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-gradient-to-r from-green-400 to-green-500 
                       rounded-lg hover:from-green-500 hover:to-green-600 
                       transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}