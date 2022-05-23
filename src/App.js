import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './/components/pages/Login/Login'
import Dashboard from './/components/Dashboard/Dashboard';
import Preferences from './/components/Preferences/Preferences';
import useToken from './/components/App/useToken';




function App() {
    const { token, setToken } = useToken();
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
