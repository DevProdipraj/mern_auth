import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registation from "./pages/Registation";
import ResetPassword from "./pages/ResetPassword";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registation" element={<Registation />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
