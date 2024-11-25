import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home'
import AboutMe from './components/AboutMe/aboutme';
import Projects from './components/Projects/projects';
import Experience from './components/Experience/experience';
import ContactMe from './components/ContactMe/contactme';
import { ThemeProvider } from './contexts/ThemeContext';
import { AnimatePresence } from "framer-motion";

function AppContent() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
