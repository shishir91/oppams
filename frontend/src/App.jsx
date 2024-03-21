import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import HomePage from "./components/Home";
import Career from "./components/Career";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
