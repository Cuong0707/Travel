import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          setUser(userData);
      }
  }, []);
    const signIn = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
                email,
                password,
            });
            const userData = {
              email,
              infoUser: response.data.infoUser,
              token: response.data.token
          };

          setUser(userData);
          localStorage.setItem('userData', JSON.stringify(userData));
          console.log('User Data:', userData);
      } catch (error) {
          console.error(error);
          throw new Error("Failed to sign in");
      }
    };

    const changePassword = async (email,oldPassword, newPassword) => {
        try {
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
          // You may update the user information or perform other actions after changing the password
        } catch (error) {
          console.error(error);
          throw new Error('Failed to change password');
        }
      };

    return (
        <AuthContext.Provider value={{ user, signIn, changePassword }}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;
