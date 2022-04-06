import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../views/Dashboard/Dashboard';
import Home from '../views/Home/Home';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';

const AppRouters = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/home' element={<Home />} exact />
                <Route path='/register' element={<Register />} exact />
                <Route path='/login' element={<Login />} exact />
                <Route path='/dashboard' element={<Dashboard />} exact />
            </Routes>
        </div>
    )
}

export default AppRouters