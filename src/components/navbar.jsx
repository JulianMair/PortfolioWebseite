import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() { 
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <div
            style={{
              height: "8em", // Höhe des Bildcontainers
              width: "8em",  // Breite des Bildcontainers
              borderRadius: "50%", // Runde Form
              overflow: "hidden", // Überschüssiges Bild verstecken
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #ddd", // Optional: Rand um das Bild
            }}
          >
            <img
              src="images/Julian_Mair.JPG"
              alt="Logo"
              style={{
                height: "100%", // Passt die Höhe an den Container an
                width: "auto",  // Beibehaltung des Seitenverhältnisses
              }}
            />
          </div>
          <span className="ms-3 fw-bold fs-4">Julian Mair</span>
        </a>
        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link className="nav-link fs-5" to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link fs-5" to="/">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        );
    }
}
 
export default Navbar;