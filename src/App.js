import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Papua from "./pages/Papua";
import "./App.css";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/papua" element={<Papua />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
