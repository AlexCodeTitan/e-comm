import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/shop" Component={ShopPage} />
      </Routes>
    </>
  );
}

export default App;
