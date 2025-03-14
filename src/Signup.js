// SignUp.js
import React, { useState } from 'react';
import { auth, db } from './firebase'; // Adjust the path if needed
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

function SignUp() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1) Create user with email & password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2) Update the user's display name in Firebase Auth
      await updateProfile(user, { displayName: name });

      // 3) Save user info in Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        phone,
        email,
        createdAt: new Date(),
      });

      alert('User created successfully!');

      // Clear form fields
      setName('');
      setPhone('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-500">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

   

export default SignUp;
