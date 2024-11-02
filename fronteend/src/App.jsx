import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';


const App = () => {
   return (

    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
   );
};

export default App;
