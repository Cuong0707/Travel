import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { set } from 'date-fns';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/users/token/${token}`);
      const userData = response.data.data;
      setUser(userData);
      console.log('User data fetched:', userData);
      if (userData !== null) {
        localStorage.setItem('infoUser', JSON.stringify(userData));
      } else {
        localStorage.removeItem('infoUser');
        localStorage.removeItem('token');
        setUser(null);
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      setUser(null);
      localStorage.removeItem('token');
      localStorage.removeItem('infoUser'); // Remove infoUser from localStorage if fetching fails
    }
  };

  const signIn = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });
      
      const token = response.data.token;
      localStorage.setItem('token', token);
      fetchUserData(token);
    } catch (error) {
      console.error('Failed to sign in:', error);
      throw new Error("Failed to sign in");
    }
  };

  const changePassword = async (oldPassword, newPassword) => {
    try {
      const infoUser = JSON.parse(localStorage.getItem('infoUser'));
      let email = null;

      if (infoUser && infoUser.email) {
        email = infoUser.email;
      } else {
        // Handle the case when email is not available in infoUser
        throw new Error('Email not found in infoUser');
      }
      const token = localStorage.getItem('token');
      const response = await axios.put(
        'http://localhost:8080/api/v1/auth/change-password',
        {
          email,
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Password changed successfully:', response.data);
    } catch (error) {
      console.error('Failed to change password:', error);
      throw new Error('Failed to change password');
    }
  };

  const resetPassword = async (token, password) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/reset-password',
        {
          token,
          password,
        }
      );
      console.log('Password changed successfully:', response.data);
    } catch (error) {
      console.error('Failed to reset password:', error);
      throw new Error('Failed to reset password');
    }
  };

  const logout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem('token'); // Remove token from localStorage
    localStorage.removeItem('infoUser'); // Remove infoUser from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, signIn, changePassword, resetPassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
