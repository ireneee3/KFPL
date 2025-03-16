import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './styles.css';
import SignUp from './Signup';
import Login from './Login';
import Home from './Home';

function App() {
  const location = useLocation();

  return (
    <Router>
      <div className="w-full min-h-screen bg-green-500 flex flex-col">
        {/* Conditionally render Navbar only on Home page */}
        {location.pathname === '/' && (
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
        )}

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