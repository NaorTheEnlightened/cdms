// src/components/Toast.js
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Alert, AlertTitle } from '../components/ui/Alert';

const Toast = () => {
  const { message, setMessage } = useContext(AuthContext);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  if (!message) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Alert
        variant={message.type === 'error' ? 'destructive' : 'default'}
      >
        <AlertTitle>{message.text}</AlertTitle>
      </Alert>
    </div>
  );
};

export default Toast;
