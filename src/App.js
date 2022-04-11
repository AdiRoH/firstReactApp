import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './/assets/pages/Login/Login'
import Dashboard from './/assets/Dashboard/Dashboard';
import Preferences from './/assets/Preferences/Preferences';
function App() {
    const [token, setToken] = useState();
    if (!token) {
        return <Login setToken={setToken} />
    }
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>}></Route>
                    <Route path="/preferences" element={<Preferences/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );

  
}

export default App;
