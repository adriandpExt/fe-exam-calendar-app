/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setToken = (token) => localStorage.setItem("token", token);
  const setEmail = (email) => localStorage.setItem("email", email);

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (token, email) => {
    setToken(token);
    setEmail(email);
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setToken(null);
    navigate("/");
  };

  const value = {
    isAuthenticated,
    loginAuth: handleLogin,
    logoutAuth: handleLogout,
    email: localStorage.getItem("email"),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
