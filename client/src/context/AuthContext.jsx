// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser.user);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password },
      );
      localStorage.setItem('token', res.data.token);
      const decodedUser = jwtDecode(res.data.token);
      setUser(decodedUser.user);
      setMessage({ type: 'success', text: 'Login successful!' });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Login failed: ' + error.response.data.message,
      });
      throw error;
    }
  };

  const register = async (username, email, password) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/register',
        {
          username,
          email,
          password,
        },
      );
      localStorage.setItem('token', res.data.token);
      const decodedUser = jwtDecode(res.data.token);
      setUser(decodedUser.user);
      setMessage({ type: 'success', text: 'Registration successful!' });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Registration failed: ' + error.response.data.message,
      });
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setMessage({ type: 'success', text: 'Logged out successfully!' });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
        message,
        setMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
