// Home.jsx
import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between bg-blue-600 p-4">
        <div className="text-white font-bold text-xl">KFPL</div>
        <div>
          <a href="/login" className="text-white mr-4 hover:underline">
            Login
          </a>
          <a href="/signup" className="text-white hover:underline">
            Sign Up
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to KFPL</h1>
        <p className="text-xl">
          Your ultimate fantasy league experience
        </p>
      </header>

      {/* Main Content */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">What is KFPL?</h2>
        <p className="text-gray-700">
          KFPL is a fantasy football league for Kenyan Premier League fans. 
          Join now to compete with friends and fans around the country!
        </p>
      </section>
    </div>
  );
}

export default Home;
