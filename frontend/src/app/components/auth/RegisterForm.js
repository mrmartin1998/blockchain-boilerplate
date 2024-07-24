// frontend/src/app/components/auth/RegisterForm.js

"use client";

import { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', {
        email,
        username,
        password,
      });
      if (response.status === 200) {
        setSuccess('Registration successful! Please check your email for verification.');
        setError('');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-base-100 shadow-lg rounded-lg">
      <h2 className="text-2xl mb-4">Register</h2>
      {error && <p className="text-error mb-4">{error}</p>}
      {success && <p className="text-success mb-4">{success}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered w-full mb-4"
        required
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input input-bordered w-full mb-4"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input input-bordered w-full mb-4"
        required
      />
      <button type="submit" className="btn btn-primary w-full">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
