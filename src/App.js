import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProfileCreate from "./components/ProfileCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<ProfileCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
