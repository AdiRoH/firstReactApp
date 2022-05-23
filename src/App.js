import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from ".//components/pages/Login/Login";
import Dashboard from ".//components/Dashboard/Dashboard";
import Preferences from ".//components/Preferences/Preferences";
import useToken from ".//components/App/useToken";
import { height } from "@mui/system";

function App() {
  const { token, setToken } = useToken();

  return (
    <div
      className="wrapper"
      style={{
        backgroundImage:
          'url("/static/media/background.910f6fc98a64c80ce1d2.PNG")',
        height: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          {!token ? (
            <Route path="/" element={<Login setToken={setToken} />}></Route>
          ) : (
            <>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/preferences" element={<Preferences />}></Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
