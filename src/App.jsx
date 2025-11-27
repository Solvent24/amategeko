// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Courses from './components/Courses.jsx';
import Assessment from './components/Assessment.jsx';
import Progress from './components/Progress.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [userProgress, setUserProgress] = useState({
    completedCourses: 0,
    totalCourses: 6,
    averageScore: 0,
    assessmentsCompleted: 0
  });

  const renderView = () => {
    switch(currentView) {
      case 'courses':
        return <Courses />;
      case 'assessment':
        return <Assessment updateProgress={setUserProgress} />;
      case 'progress':
        return <Progress userProgress={userProgress} />;
      default:
        return (
          <>
            <Hero />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main>
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;