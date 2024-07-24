import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';
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
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;