import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from '../context/AuthContext';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Layout from '../components/Layout';
import Toast from '../components/Toast';
import OAuthCallback from '../components/OAuthCallback';

const PrivateRoute = () => {
  const context = useContext(AuthContext);

  if (context?.loading) {
    return <div>Loading...</div>;
  }

  return !!context?.user;
};

const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/oauth/callback" element={<OAuthCallback />} />
            <Route
              path="dashboard"
              element={
                PrivateRoute() ? <Dashboard /> : <Navigate to="/login" />
              }
            />
            {/* <PrivateRoute element={<Dashboard />} path="/dashboard" /> */}
          </Routes>
          <Toast />
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;
