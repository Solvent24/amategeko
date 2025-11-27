// src/components/Progress.js
import React from 'react';

const Progress = ({ userProgress }) => {
  const courses = [
    { name: "Web Development", progress: 65 },
    { name: "Data Science", progress: 30 },
    { name: "Digital Marketing", progress: 0 },
    { name: "Mobile Development", progress: 0 }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title">My Learning Progress</h2>
        
        <div className="row mb-5">
          <div className="col-md-3 mb-3">
            <div className="etis-card text-center p-4">
              <h3 className="text-success">{userProgress.completedCourses}</h3>
              <p>Courses Completed</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="etis-card text-center p-4">
              <h3 className="text-success">{userProgress.totalCourses}</h3>
              <p>Total Courses</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="etis-card text-center p-4">
              <h3 className="text-success">{userProgress.averageScore}%</h3>
              <p>Average Score</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="etis-card text-center p-4">
              <h3 className="text-success">{userProgress.assessmentsCompleted}</h3>
              <p>Assessments Taken</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-8">
            <div className="etis-card p-4">
              <h4 className="mb-4">Course Progress</h4>
              {courses.map((course, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>{course.name}</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="progress" style={{height: '10px'}}>
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{width: `${course.progress}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="etis-card p-4">
              <h4 className="mb-4">Achievements</h4>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                  <span className="text-white">🏆</span>
                </div>
                <div>
                  <h6 className="mb-0">First Steps</h6>
                  <small>Complete your first lesson</small>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                  <span>📚</span>
                </div>
                <div>
                  <h6 className="mb-0">Bookworm</h6>
                  <small>Complete 5 courses</small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                  <span>⚡</span>
                </div>
                <div>
                  <h6 className="mb-0">Quick Learner</h6>
                  <small>Complete a course in 3 days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;