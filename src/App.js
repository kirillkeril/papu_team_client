import { LoginPage } from "./pages/loginPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import {LandingPage} from "./pages/LandingPage/LandingPage";

function App() {
  return (
    // <div className="App">
    //   <LoginPage />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
