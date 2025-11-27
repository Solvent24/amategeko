// src/components/Header.jsx
import React, { useState } from 'react';

const Header = ({ currentView, setCurrentView }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavClick = (view) => {
    setCurrentView(view);
    setIsNavCollapsed(true);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <button 
            className="navbar-brand fw-bold fs-3 text-success border-0 bg-transparent"
            onClick={() => handleNavClick('home')}
          >
            ETIS Learning
          </button>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded={!isNavCollapsed} 
            aria-label="Toggle navigation"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button 
                  className={`nav-link btn btn-link text-decoration-none ${currentView === 'home' ? 'active fw-bold text-success' : 'text-dark'}`}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link btn btn-link text-decoration-none ${currentView === 'courses' ? 'active fw-bold text-success' : 'text-dark'}`}
                  onClick={() => handleNavClick('courses')}
                >
                  Courses
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link btn btn-link text-decoration-none ${currentView === 'assessment' ? 'active fw-bold text-success' : 'text-dark'}`}
                  onClick={() => handleNavClick('assessment')}
                >
                  Assessment
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link btn btn-link text-decoration-none ${currentView === 'progress' ? 'active fw-bold text-success' : 'text-dark'}`}
                  onClick={() => handleNavClick('progress')}
                >
                  My Progress
                </button>
              </li>
              <li className="nav-item ms-2">
                <button className="btn etis-btn-primary">Sign In</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;