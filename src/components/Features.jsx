// src/components/Features.js
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "📚",
      title: "Structured Courses",
      description: "Follow carefully designed learning paths with step-by-step guidance."
    },
    {
      icon: "🎯",
      title: "Interactive Assessments",
      description: "Test your knowledge with quizzes and get instant feedback."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed progress reports."
    },
    {
      icon: "🔄",
      title: "Adaptive Learning",
      description: "Content adjusts to your learning pace and areas that need improvement."
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title">How ETIS Helps You Learn</h2>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="etis-card h-100 p-4 text-center">
                <div className="display-4 mb-3">{feature.icon}</div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;