// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to CDMS</h1>
      <p className="text-xl mb-8">
        Collaborative Document Management System
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
