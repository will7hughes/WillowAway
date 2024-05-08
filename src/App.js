import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Home />
        <Projects />
        <About />
        <Resume />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
