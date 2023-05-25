import { LoginPage } from "./pages/loginPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";

function App() {
  return (
    // <div className="App">
    //   <LoginPage />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
