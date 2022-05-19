import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./global.css";

import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { FindMovie } from "./pages/FindMovie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/find-movie" element={<FindMovie />} />
    </Routes>
  </Router>
);
