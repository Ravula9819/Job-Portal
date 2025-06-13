import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const ConditionalNavbar = () => {
  const location = useLocation();

  // Hide Navbar on Dashboard route
  const hideNavbarRoutes = ['/dashboard','/saved-applications'];
  

  return !hideNavbarRoutes.includes(location.pathname) ? <Navbar /> : null;
};

export default ConditionalNavbar;
