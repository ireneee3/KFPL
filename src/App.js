import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';

// Home Page Component
function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Tailwind test element */}
      <div className="text-red-500 text-3xl font-bold mb-4">
        If this is red, Tailwind is working!
      </div>
      <h2 className="text-center text-2xl">Home Page</h2>
    </div>
  );
}

// Sign Up Page Component
function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Sign Up Page</h2>
      <form className="bg-white p-6 rounded-md shadow-md space-y-4">
        <input
          type="text"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
}

// Login Page Component
function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-center text-2xl">Login Page</h2>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-green-500 flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
          <div className="text-xl font-bold">KFPL</div>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/signup" className="hover:text-gray-200">
              Sign Up
            </Link>
            <Link to="/login" className="hover:text-gray-200">
              Login
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
