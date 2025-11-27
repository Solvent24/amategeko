// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="py-5 etis-bg-light position-relative overflow-hidden" style={{ minHeight: '80vh' }}>
      {/* Big Animated Car */}
      <div className="car-animation-container">
        <div className="car-avatar">🚗</div>
      </div>
      
      <div className="container py-5 position-relative" style={{zIndex: 2}}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">Learn, Practice, and Master New Skills</h1>
            <p className="lead mb-4">
              ETIS provides interactive learning experiences with personalized guidance 
              and assessments to help you achieve your educational goals.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button className="btn etis-btn-primary">Get Started</button>
              <button className="btn etis-btn-outline">Explore Courses</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <div className="bg-white rounded-3 p-4 shadow">
                <img 
                  src="https://via.placeholder.com/500x300/4CAF50/FFFFFF?text=Interactive+Learning" 
                  alt="Interactive Learning" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;