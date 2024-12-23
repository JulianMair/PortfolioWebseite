import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar"; // Navbar-Komponente
import Projects from "./components/project"; // Projects-Komponente
import AboutMe from "./about"; // AboutMe-Komponente

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Route für die Startseite */}
          <Route path="/" element={<Projects/>} />
          
          {/* Route für die Projekte-Seite */}
          <Route path="/projects" element={<Projects />} />
          
          {/* Route für die About Me-Seite */}
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
