// src/components/Assessment.js
import React, { useState } from 'react';

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  // Sample assessment questions (similar structure to courses)
  const assessmentQuestions = [
    {
      id: 1,
      question: "Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
      options: ["Umuyobozi", "Umuherekeza", "A na B ni ibisubizo by'ukuri", "Nta gisubizo cy'ukuri kirimo"],
      correctAnswer: 2,
      explanation: "Ikinyabiziga cyose kigomba kugira umuyobozi n'umuherekeza."
    },
    {
      id: 2,
      question: "Ijambo 'akayira' bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
      options: ["Abanyamaguru", "Ibinyabiziga bigendera ku biziga bibiri", "A na B ni ibisubizo by'ukuri", "Nta gisubizo cy'ukuri kirimo"],
      correctAnswer: 2,
      explanation: "'Akayira' ni inzira yagenewe abanyamaguru n'ibinyabiziga bigendera ku biziga bibiri."
    },
    {
      id: 3,
      question: "Ubugari bwa romoruki ikuruwe n'ikinyamitende itatu ntibugomba kurenza:",
      options: ["cm75", "cm125", "cm265", "Nta gisubizo cy'ukuri"],
      correctAnswer: 2,
      explanation: "Ubugari bwa romoruki ikuruwe n'ikinyamitende itatu ntibugomba kurenza cm265."
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = {...userAnswers};
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    assessmentQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / assessmentQuestions.length) * 100);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    setTestStarted(false);
  };

  const startAssessment = () => {
    setTestStarted(true);
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
  };

  if (!testStarted) {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="etis-card p-5 text-center">
                <h2 className="mb-4">Driving Test Assessment</h2>
                <p className="lead mb-4">
                  Test your knowledge with this comprehensive driving test assessment. 
                  This simulation will help you prepare for the real exam.
                </p>
                
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="p-3">
                      <h5>📝 Assessment Details</h5>
                      <ul className="list-unstyled">
                        <li>• {assessmentQuestions.length} Questions</li>
                        <li>• Multiple Choice Format</li>
                        <li>• Real Exam Simulation</li>
                        <li>• Instant Results</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3">
                      <h5>🎯 Test Rules</h5>
                      <ul className="list-unstyled">
                        <li>• No time limit</li>
                        <li>• Answer all questions</li>
                        <li>• No hints provided</li>
                        <li>• See results at the end</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button 
                  className="btn btn-primary btn-lg"
                  onClick={startAssessment}
                >
                  Start Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const correctAnswers = assessmentQuestions.filter((question, index) => 
      userAnswers[index] === question.correctAnswer
    ).length;

    return (
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="etis-card p-5 text-center">
                <h2 className="mb-4">Assessment Results</h2>
                
                <div className="results-card mb-4" style={{
                  backgroundColor: score >= 80 ? '#e7f3ff' : '#f8d7da',
                  border: `3px solid ${score >= 80 ? '#28a745' : '#dc3545'}`,
                  borderRadius: '15px',
                  padding: '2rem'
                }}>
                  <h1 style={{ 
                    color: score >= 80 ? '#28a745' : '#dc3545',
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                  }}>
                    {score}%
                  </h1>
                  <h4 className="mb-3">
                    {score >= 80 ? '🎉 Excellent!' : '📚 Keep Practicing!'}
                  </h4>
                  <p className="lead">
                    You got {correctAnswers} out of {assessmentQuestions.length} questions correct
                  </p>
                </div>

                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="p-3">
                      <div className="text-success fw-bold" style={{fontSize: '2rem'}}>
                        ✓ {correctAnswers}
                      </div>
                      <small>Correct Answers</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3">
                      <div className="text-danger fw-bold" style={{fontSize: '2rem'}}>
                        ✗ {assessmentQuestions.length - correctAnswers}
                      </div>
                      <small>Incorrect Answers</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3">
                      <div className="text-primary fw-bold" style={{fontSize: '2rem'}}>
                        {assessmentQuestions.length}
                      </div>
                      <small>Total Questions</small>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-2 justify-content-center">
                  <button className="btn btn-primary" onClick={resetAssessment}>
                    Take Assessment Again
                  </button>
                  <button className="btn btn-outline-primary" onClick={() => setTestStarted(false)}>
                    Back to Courses
                  </button>
                </div>
              </div>

              {/* Question Review */}
              <div className="etis-card p-4 mt-4">
                <h4 className="mb-4">Question Review</h4>
                {assessmentQuestions.map((question, index) => {
                  const userAnswer = userAnswers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={question.id} className="mb-4 p-3 border rounded">
                      <h6>Question {index + 1}: {question.question}</h6>
                      <div className="mt-2">
                        <strong>Your answer:</strong>{' '}
                        <span className={isCorrect ? 'text-success' : 'text-danger'}>
                          {userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'} 
                          {isCorrect ? ' ✓' : ' ✗'}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div className="mt-1">
                          <strong>Correct answer:</strong>{' '}
                          <span className="text-success">
                            {question.options[question.correctAnswer]} ✓
                          </span>
                        </div>
                      )}
                      <div className="mt-2">
                        <strong>Explanation:</strong> {question.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQ = assessmentQuestions[currentQuestion];
  const userAnswer = userAnswers[currentQuestion];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <button className="btn btn-outline-primary" onClick={resetAssessment}>
                &larr; Exit Assessment
              </button>
              <div className="text-center">
                <h4 className="mb-0">Driving Test Assessment</h4>
                <small className="text-muted">
                  Question {currentQuestion + 1} of {assessmentQuestions.length}
                </small>
              </div>
              <div className="text-muted">
                Score: {calculateScore()}%
              </div>
            </div>

            {/* Progress Bar */}
            <div className="progress mb-4" style={{height: '8px'}}>
              <div 
                className="progress-bar" 
                role="progressbar" 
                style={{width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%`}}
              ></div>
            </div>

            {/* Question Card */}
            <div className="etis-card p-4 mb-4">
              <h4 className="mb-4">{currentQ.question}</h4>
              
              <div className="options-container">
                {currentQ.options.map((option, index) => {
                  const isSelected = userAnswer === index;
                  
                  return (
                    <div 
                      key={index}
                      className={`option-item p-3 mb-3 ${isSelected ? 'selected-answer' : ''}`}
                      onClick={() => handleAnswerSelect(index)}
                      style={{
                        cursor: 'pointer',
                        border: '1px solid #dee2e6',
                        borderRadius: '8px',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <span className="me-3 fw-bold">{String.fromCharCode(65 + index)}.</span>
                        <span>{option}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="d-flex justify-content-between mt-4">
                <button 
                  className="btn btn-outline-primary" 
                  onClick={handlePrevQuestion}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </button>
                
                <button 
                  className="btn btn-primary" 
                  onClick={handleNextQuestion}
                  disabled={userAnswer === undefined}
                >
                  {currentQuestion === assessmentQuestions.length - 1 ? 'Finish Assessment' : 'Next Question'}
                </button>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="etis-card p-3">
              <h6 className="mb-3">Question Navigation</h6>
              <div className="question-grid">
                {assessmentQuestions.map((_, index) => (
                  <div
                    key={index}
                    className={`question-number ${index === currentQuestion ? 'current' : ''} ${
                      userAnswers[index] !== undefined ? 'answered' : ''
                    }`}
                    onClick={() => setCurrentQuestion(index)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .option-item:hover {
          background-color: #f8f9fa;
        }
        
        .selected-answer {
          background-color: #e7f3ff;
          border-color: #b8daff !important;
        }

        .question-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 8px;
        }

        .question-number {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #dee2e6;
          border-radius: 50%;
          cursor: pointer;
          font-size: 12px;
          transition: all 0.2s;
        }

        .question-number:hover {
          background-color: #f8f9fa;
        }

        .question-number.current {
          border-color: #007bff;
          background-color: #007bff;
          color: white;
        }

        .question-number.answered {
          border-color: #28a745;
          background-color: #28a745;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Assessment;