import React from "react";
import { Routes, Route } from "react-router-dom";
// import { lazy } from "react";
import Home from "../pages/home";
import About from "../pages/about";
import Stores from "../pages/stores";
// const Home = lazy(() => import("../components/home"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/stores" element={<Stores />} />
    </Routes>
  );
};

export default AppRouter;
