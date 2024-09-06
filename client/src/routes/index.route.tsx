import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
