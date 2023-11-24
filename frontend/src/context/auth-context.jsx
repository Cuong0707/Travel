import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
                email,
                password,
            });
            // Save token to localStorage
      localStorage.setItem('token', response.data.token);
      // Save user data to context
      const userData = { email, token: response.data.token };
      setUser(userData);
      console.log('User Data:', userData); // Log user data to console
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
