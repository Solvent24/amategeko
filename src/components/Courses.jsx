// src/components/Courses.js
import React, { useState } from 'react';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [courseProgress, setCourseProgress] = useState({});
  const [viewMode, setViewMode] = useState('learn'); // 'learn' or 'test'

  const courses = [
    {
      id: 1,
      title: "Ibinyabiziga n'ibisabwa",
      description: "Vehicle requirements and regulations",
      icon: "🚗",
      questions: [
        {
          id: 1,
          question: "Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
          options: ["Umuyobozi", "Umuherekeza", "A na B ni ibisubizo by'ukuri", "Nta gisubizo cy'ukuri kirimo"],
          correctAnswer: 2,
          explanation: "Ikinyabiziga cyose kigomba kugira umuyobozi n'umuherekeza, ni yo mpamvu isubizo cy'ukuri ni 'A na B ni ibisubizo by'ukuri'."
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
          question: "Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n'uturanga gukata tw'ibara ryera utwo turanga cyerekezo tumenyesha:",
          options: [
            "Igisate cy'umuhanda abayobozi bagomba gukurikira",
            "Ahegereye umurongo ukomeje", 
            "Igabanurwa ry'umubare w'ibisate by'umuhanda mu cyerekezo bajyamo",
            "A na C nibyo"
          ],
          correctAnswer: 3,
          explanation: "Umurongo uciyemo uduce umenyesha igisate cy'umuhanda abayobozi bagomba gukurikira no kumenya igabanuka ry'umubare w'ibisate by'umuhanda."
        }
      ]
    },
    {
      id: 2,
      title: "Uburemere n'ubugari",
      description: "Weight and width regulations", 
      icon: "⚖️",
      questions: [
        {
          id: 6,
          question: "Ubugari bwa romoruki ikuruwe n'ikinyamitende itatu ntibugomba kurenza ibipimo bikurikira:",
          options: ["cm75", "cm125", "cm265", "Nta gisubizo cy'ukuri"],
          correctAnswer: 2,
          explanation: "Ubugari bwa romoruki ikuruwe n'ikinyamitende itatu ntibugomba kurenza cm265."
        },
        {
          id: 7,
          question: "Uburebure bw'ibinyabiziga bikurikira ntibugomba kurenga metero 11:",
          options: [
            "Ibifite umutambiko umwe uhuza imipira",
            "Ibifite imitambiko ibiri ikurikiranye mu bugari bwayo",
            "Makuzungu",
            "Nta gisubizo cy'ukuri"
          ],
          correctAnswer: 3,
          explanation: "Uburebure bw'ibinyabiziga byose ntibugomba kurenga metero 11."
        }
      ]
    },
    {
      id: 3,
      title: "Amasaha n'imipimo",
      description: "Speed limits and measurements",
      icon: "⏱️",
      questions: [
        {
          id: 11,
          question: "Ahatari mu nsisiro umuvuduko ntarengwa mu isaha wa velomoteri ni:",
          options: ["Km50", "Km40", "Km30", "Nta gisubizo cy'ukuri"],
          correctAnswer: 0,
          explanation: "Ahatari mu nsisiro umuvuduko ntarengwa mu isaha wa velomoteri ni Km50."
        },
        {
          id: 41,
          question: "Iyo nta mategeko awugabanya by'umwihariko, umuvuduko ntarengwa ku modoka zitwara abagenzi mu buryo bwa rusange ni:",
          options: ["Km 60 mu isaha", "Km 40 mu isaha", "Km 25 mu isaha", "Km20 mu isaha"],
          correctAnswer: 0,
          explanation: "Umuvuduko ntarengwa ku modoka zitwara abagenzi mu buryo bwa rusange ni Km 60 mu isaha."
        }
      ]
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = {...userAnswers};
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
    setShowExplanation(true);
    
    // Update progress
    const isCorrect = answerIndex === selectedCourse.questions[currentQuestion].correctAnswer;
    const progressKey = `${selectedCourse.id}-${currentQuestion}`;
    setCourseProgress(prev => ({
      ...prev,
      [progressKey]: isCorrect
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < selectedCourse.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const resetCourse = () => {
    setSelectedCourse(null);
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowExplanation(false);
    setViewMode('learn');
  };

  const calculateCourseScore = () => {
    if (!selectedCourse) return 0;
    let correct = 0;
    selectedCourse.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / selectedCourse.questions.length) * 100);
  };

  const getQuestionStatus = (questionIndex) => {
    if (userAnswers[questionIndex] === undefined) return 'unanswered';
    return userAnswers[questionIndex] === selectedCourse.questions[questionIndex].correctAnswer ? 'correct' : 'wrong';
  };

  const startTestMode = () => {
    setViewMode('test');
    setUserAnswers({});
    setCurrentQuestion(0);
    setShowExplanation(false);
  };

  const startLearnMode = () => {
    setViewMode('learn');
    setUserAnswers({});
    setCurrentQuestion(0);
    setShowExplanation(false);
  };

  if (!selectedCourse) {
    return (
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Structured Courses - Ikinyarwanda Driving Test</h2>
          <p className="text-center mb-5">Select a course to start learning about Kinyarwanda driving regulations. Each course contains practice questions with detailed explanations.</p>
          
          <div className="row g-4">
            {courses.map((course) => (
              <div key={course.id} className="col-md-6 col-lg-4">
                <div 
                  className="etis-card h-100 p-4 text-center course-card"
                  onClick={() => setSelectedCourse(course)}
                  style={{cursor: 'pointer'}}
                >
                  <div className="display-4 mb-3">{course.icon}</div>
                  <h5 className="fw-bold">{course.title}</h5>
                  <p className="text-muted">{course.description}</p>
                  <div className="badge bg-primary">
                    {course.questions.length} {course.questions.length === 1 ? 'Question' : 'Questions'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .course-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }
        `}</style>
      </section>
    );
  }

  const currentQ = selectedCourse.questions[currentQuestion];
  const userAnswer = userAnswers[currentQuestion];
  const isCorrect = userAnswer === currentQ.correctAnswer;
  const score = calculateCourseScore();
  const allQuestionsAnswered = Object.keys(userAnswers).length === selectedCourse.questions.length;

  return (
    <section className="py-5">
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button className="btn btn-outline-primary" onClick={resetCourse}>
            &larr; Back to Courses
          </button>
          <div className="text-center">
            <h2 className="mb-0">{selectedCourse.title}</h2>
            <small className="text-muted">
              {viewMode === 'learn' ? 'Learning Mode' : 'Test Mode'} - Question {currentQuestion + 1} of {selectedCourse.questions.length}
            </small>
          </div>
          <div className="text-muted">
            {allQuestionsAnswered && `Score: ${score}%`}
          </div>
        </div>

        {/* Mode Selector */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="etis-card p-3">
              <div className="btn-group w-100">
                <button 
                  className={`btn ${viewMode === 'learn' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={startLearnMode}
                >
                  📚 Learning Mode
                </button>
                <button 
                  className={`btn ${viewMode === 'test' ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={startTestMode}
                >
                  🎯 Test Mode
                </button>
              </div>
              <div className="mt-2 text-center">
                <small className="text-muted">
                  {viewMode === 'learn' 
                    ? 'Learn with immediate feedback and explanations' 
                    : 'Test yourself without hints - real exam simulation'}
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress mb-4" style={{height: '8px'}}>
          <div 
            className="progress-bar" 
            role="progressbar" 
            style={{width: `${((currentQuestion + 1) / selectedCourse.questions.length) * 100}%`}}
            aria-valuenow={(currentQuestion + 1)} 
            aria-valuemin="0" 
            aria-valuemax={selectedCourse.questions.length}
          ></div>
        </div>

        {/* Score Display */}
        {viewMode === 'test' && Object.keys(userAnswers).length > 0 && (
          <div className="alert alert-info mb-4">
            Current Score: <strong>{score}%</strong> ({Object.values(userAnswers).filter((ans, idx) => 
              ans === selectedCourse.questions[idx].correctAnswer
            ).length} out of {Object.keys(userAnswers).length} answered correctly)
          </div>
        )}

        <div className="row">
          <div className="col-lg-8">
            <div className="etis-card p-4 mb-4">
              <h4 className="mb-4">{currentQ.question}</h4>
              
              <div className="options-container">
                {currentQ.options.map((option, index) => {
                  const isSelected = userAnswer === index;
                  const isCorrectAnswer = index === currentQ.correctAnswer;
                  
                  let optionClass = '';
                  if (showExplanation) {
                    if (isCorrectAnswer) {
                      optionClass = 'correct-answer';
                    } else if (isSelected && !isCorrectAnswer) {
                      optionClass = 'wrong-answer';
                    }
                  } else if (isSelected) {
                    optionClass = 'selected-answer';
                  }

                  return (
                    <div 
                      key={index}
                      className={`option-item p-3 mb-3 ${optionClass}`}
                      onClick={() => !showExplanation && handleAnswerSelect(index)}
                      style={{
                        cursor: showExplanation ? 'default' : 'pointer',
                        border: '1px solid #dee2e6',
                        borderRadius: '8px',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <span className="me-3 fw-bold">{String.fromCharCode(65 + index)}.</span>
                        <span>{option}</span>
                        {showExplanation && isCorrectAnswer && (
                          <span className="ms-auto text-success fw-bold">✓ Correct Answer</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {showExplanation && (
                <div className="explanation-box p-3 mt-4 rounded" style={{backgroundColor: '#f8f9fa'}}>
                  <h5>Explanation:</h5>
                  <p>{currentQ.explanation}</p>
                  {viewMode === 'learn' && (
                    isCorrect ? (
                      <div className="text-success fw-bold">✓ Correct! Well done.</div>
                    ) : (
                      <div className="text-danger fw-bold">✗ Incorrect. The right answer is {String.fromCharCode(65 + currentQ.correctAnswer)}</div>
                    )
                  )}
                </div>
              )}

              <div className="d-flex justify-content-between mt-4">
                <button 
                  className="btn btn-outline-primary" 
                  onClick={handlePrevQuestion}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </button>
                
                {showExplanation || viewMode === 'learn' ? (
                  <button 
                    className="btn btn-primary" 
                    onClick={handleNextQuestion}
                    disabled={currentQuestion === selectedCourse.questions.length - 1}
                  >
                    {currentQuestion === selectedCourse.questions.length - 1 ? 'Finish' : 'Next Question'}
                  </button>
                ) : (
                  <div className="text-muted">
                    {userAnswer === undefined 
                      ? 'Select an answer to continue' 
                      : 'Answer selected - proceed to next question'}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="etis-card p-4">
              <h5 className="mb-3">Question Navigator</h5>
              <div className="question-grid">
                {selectedCourse.questions.map((_, index) => (
                  <div
                    key={index}
                    className={`question-number ${index === currentQuestion ? 'current' : ''} ${getQuestionStatus(index)}`}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setShowExplanation(viewMode === 'learn');
                    }}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              
              <div className="mt-3">
                <small className="text-muted">
                  <span className="legend-correct">✓ Correct</span> | 
                  <span className="legend-wrong"> ✗ Wrong</span> | 
                  <span className="legend-unanswered"> ○ Unanswered</span> | 
                  <span className="legend-current"> ● Current</span>
                </small>
              </div>

              {allQuestionsAnswered && (
                <div className="mt-4 p-3 text-center" style={{
                  backgroundColor: score >= 80 ? '#e7f3ff' : '#f8d7da',
                  borderRadius: '8px',
                  border: `2px solid ${score >= 80 ? '#28a745' : '#dc3545'}`
                }}>
                  <h5>Course {score >= 80 ? 'Completed!' : 'Needs Improvement'}</h5>
                  <p className="mb-2">Final Score: <strong style={{color: score >= 80 ? '#28a745' : '#dc3545'}}>{score}%</strong></p>
                  <p className="small mb-2">
                    {score >= 80 
                      ? 'Excellent! You are ready for the real test.' 
                      : 'Keep practicing to improve your score.'}
                  </p>
                  <div className="d-flex gap-2 justify-content-center">
                    <button className="btn btn-outline-primary btn-sm" onClick={resetCourse}>
                      Try Another Course
                    </button>
                    <button className="btn btn-primary btn-sm" onClick={startTestMode}>
                      Retry Test
                    </button>
                  </div>
                </div>
              )}

              {/* Quick Stats */}
              {Object.keys(userAnswers).length > 0 && (
                <div className="mt-3 p-2 small text-center" style={{backgroundColor: '#f8f9fa', borderRadius: '5px'}}>
                  <div className="row">
                    <div className="col-4">
                      <div className="text-success">✓ {Object.values(userAnswers).filter((ans, idx) => ans === selectedCourse.questions[idx].correctAnswer).length}</div>
                      <small>Correct</small>
                    </div>
                    <div className="col-4">
                      <div className="text-danger">✗ {Object.values(userAnswers).filter((ans, idx) => ans !== selectedCourse.questions[idx].correctAnswer).length}</div>
                      <small>Wrong</small>
                    </div>
                    <div className="col-4">
                      <div>{selectedCourse.questions.length - Object.keys(userAnswers).length}</div>
                      <small>Left</small>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .option-item:hover:not(.correct-answer):not(.wrong-answer):not(.selected-answer) {
          background-color: #f8f9fa;
        }
        
        .correct-answer {
          background-color: #d4edda;
          border-color: #c3e6cb !important;
          color: #155724;
        }
        
        .wrong-answer {
          background-color: #f8d7da;
          border-color: #f5c6cb !important;
          color: #721c24;
        }

        .selected-answer {
          background-color: #e7f3ff;
          border-color: #b8daff !important;
        }

        .question-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
        }

        .question-number {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #dee2e6;
          border-radius: 50%;
          cursor: pointer;
          font-size: 14px;
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

        .question-number.correct {
          border-color: #28a745;
          background-color: #28a745;
          color: white;
        }

        .question-number.wrong {
          border-color: #dc3545;
          background-color: #dc3545;
          color: white;
        }

        .legend-correct { color: #28a745; margin: 0 5px; }
        .legend-wrong { color: #dc3545; margin: 0 5px; }
        .legend-unanswered { color: #6c757d; margin: 0 5px; }
        .legend-current { color: #007bff; margin: 0 5px; }
      `}</style>
    </section>
  );
};

export default Courses;