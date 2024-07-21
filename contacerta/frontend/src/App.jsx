import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/Main';
import AuthProvider from './context/provider';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route 
            exact path="/" 
            element={<MainPage />} 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;