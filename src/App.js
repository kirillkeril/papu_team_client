import { LoginPage } from "./pages/loginPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import {MainPage} from "./pages/MainPage/MainPage";
import {ProductPage} from "./pages/ProductPage/ProductPage";

function App() {
  return (
    // <div className="App">
    //   <LoginPage />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
