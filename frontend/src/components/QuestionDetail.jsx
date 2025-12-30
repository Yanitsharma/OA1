import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // 1. Added useNavigate here
import axios from 'axios';
import '../App.css'; 
import { FaArrowLeft } from 'react-icons/fa';

const QuestionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // 2. Defined navigate here
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Fetch the single question by ID
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setLoading(true);
        // Ensure this matches your actual API endpoint for a SINGLE question
        const response = await axios.get(`https://oooo-gilt-kappa.vercel.app/api/questions/${id}`);
        setQuestion(response.data);
      } catch (err) {
        console.error("Error fetching question:", err);
        setError("Could not load the question. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuestion();
  }, [id]);

  // 2. Helper for badge color (same as in TopicPage)
  const getDifficultyClass = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case "easy": return "badge easy";
      case "hard": return "badge hard";
      default: return "badge medium";
    }
  };

  if (loading) return <div className="loading-container" style={{paddingTop: '100px', textAlign: 'center', color: 'white'}}>Loading Question...</div>;
  if (error) return <div className="topic-container" style={{paddingTop: '100px'}}><div className="error-msg text-center text-white">{error}</div></div>;
  if (!question) return <div className="text-white text-center mt-5" style={{paddingTop: '100px'}}>Problem not found.</div>;

  // 3. Render Content reusing TopicPage structure
  return (
    <div className="topic-container" style={{paddingTop: '100px', minHeight: '100vh'}}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Back Button */}
        <div 
          onClick={() => navigate(-1)} // Now this works because navigate is defined
          style={{ 
            fontSize: '1.1rem', 
            cursor: 'pointer', 
            background: 'transparent', 
            border: 'none', 
            padding: 0,
            zIndex: 100, /* Ensures it sits above other elements */
            position: 'relative'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#38bdf8'}
          onMouseOut={(e) => e.currentTarget.style.color = 'white'}
        >
          <FaArrowLeft className="me-2" /> Back to List
        </div>
        {/* Question Card (Reusing your TopicPage layout) */}
        <div className="question-card">
            
            {/* Question Title & Badge */}
            <div className="q-header">
              <h1 className="q-title" style={{fontSize: '2rem'}}>{question.title}</h1>
              <span className={getDifficultyClass(question.difficulty)}>
                {question.difficulty}
              </span>
            </div>

            {/* Problem Statement */}
            <div className="q-section">
              <span className="q-section-title">Problem Statement:</span>
              <div 
                className="q-text"
                dangerouslySetInnerHTML={{ __html: question.problemStatement || question.description || "No description available." }} 
              />
            </div>

            {/* Input/Output Formats */}
            {(question.inputFormat || question.outputFormat) && (
              <div className="q-row">
                {question.inputFormat && (
                  <div className="q-section">
                      <span className="q-section-title">Input Format:</span>
                      <p className="q-text">{question.inputFormat}</p>
                  </div>
                )}
                {question.outputFormat && (
                  <div className="q-section">
                      <span className="q-section-title">Output Format:</span>
                      <p className="q-text">{question.outputFormat}</p>
                  </div>
                )}
              </div>
            )}

            {/* Constraints */}
            {question.constraints && (
              <div className="q-section">
                <span className="q-section-title">Constraints:</span>
                {/* Check if constraints is an array (like in TopicPage) or a single string */}
                {Array.isArray(question.constraints) ? (
                  <ul className="constraints-list">
                    {question.constraints.map((constraint, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: constraint }} />
                    ))}
                  </ul>
                ) : (
                  <div className="constraints-box">
                    <pre className="q-text" style={{whiteSpace: 'pre-wrap', fontFamily: 'monospace'}}>{question.constraints}</pre>
                  </div>
                )}
              </div>
            )}

            {/* Examples (Handling both Array format and if stored as text) */}
            {question.examples && Array.isArray(question.examples) && question.examples.length > 0 && (
              <div className="q-section">
                <span className="q-section-title">Examples:</span>
                {question.examples.map((ex, i) => (
                  <div key={i} className="example-box">
                    <div>
                      <span className="example-label">Input:</span>
                      <code>{ex.input}</code>
                    </div>
                    <div style={{ marginTop: '5px' }}>
                      <span className="example-label">Output:</span>
                      <code>{ex.output}</code>
                    </div>
                    {ex.explanation && (
                      <div style={{ marginTop: '5px' }}>
                        <span className="example-label">Explanation:</span>
                        <span className="q-text">{ex.explanation}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

        </div>

      </div>
    </div>
  );
};

export default QuestionDetail;