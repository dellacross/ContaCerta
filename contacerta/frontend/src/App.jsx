import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Expenses from './pages/Expenses';
import Config from '../src/pages/Config'
import AboutUs from '../src/pages/AboutUs'
import AuthProvider from './context/provider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route 
            exact path="/dashboard" 
            element={<DashBoard />} 
          />
          <Route 
            exact path="/profile" 
            element={<Profile />} 
          />
          <Route 
            exact path="/login" 
            element={<Login />} 
          />
          <Route 
            exact path="/calendar" 
            element={<Calendar />} 
          />
          <Route 
            exact path="/expenses" 
            element={<Expenses />} 
          />
          <Route 
            exact path="/configs" 
            element={<Config />} 
          />
          <Route 
            exact path="/aboutus" 
            element={<AboutUs />} 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;