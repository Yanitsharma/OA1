import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get "Microsoft" from URL

const TopicPage = () => {
  // 1. Get the company name from the URL (e.g., "Microsoft")
  const { topicName } = useParams();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Fetch data whenever the topicName changes
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // REPLACE THIS URL with your actual backend endpoint
        // Example: http://localhost:5000/api/questions/company/Microsoft
        const response = await fetch(`http://localhost:4000/api/questions/company/${topicName}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }

        const data = await response.json();
        setQuestions(data); // Assuming API returns an array of questions
      } catch (err) {
        console.error(err);
        setError("Could not load questions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (topicName) {
      fetchQuestions();
    }
  }, [topicName]);

  // 3. Helper to determine badge color
  const getDifficultyClass = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case "easy": return "badge easy";
      case "hard": return "badge hard";
      default: return "badge medium";
    }
  };

  // 4. Render Loading or Error states
  if (loading) return <div className="loading-container">Loading Questions...</div>;
  if (error) return <div className="topic-container"><div className="error-msg">{error}</div></div>;

  // 5. Render Main Content
  return (
    <div className="topic-container">
      {/* Header Section */}
      <div className="topic-header">
        <h1 className="topic-title">{topicName} Questions</h1>
        <p className="topic-subtitle">
          {questions.length > 0 
            ? `Found ${questions.length} questions asked in ${topicName} coding assesment.` 
            : `No questions found for ${topicName} yet.`}
        </p>
      </div>

      {/* Questions List */}
      <div className="questions-list">
        {questions.map((q, index) => (
          <div key={q._id || index} className="question-card">
            
            {/* Question Title & Badge */}
            <div className="q-header">
              <h2 className="q-title">{index + 1}. {q.title}</h2>
              <span className={getDifficultyClass(q.difficulty)}>
                {q.difficulty}
              </span>
            </div>

            {/* Problem Statement (HTML Rendering) */}
            <div className="q-section">
              <span className="q-section-title">Problem Statement:</span>
              <div 
                className="q-text"
                dangerouslySetInnerHTML={{ __html: q.problemStatement }} 
              />
            </div>

            {/* Input/Output Formats */}
            {(q.inputFormat || q.outputFormat) && (
              <div className="q-row">
                {q.inputFormat && (
                  <div className="q-section">
                     <span className="q-section-title">Input Format:</span>
                     <p className="q-text">{q.inputFormat}</p>
                  </div>
                )}
                {q.outputFormat && (
                  <div className="q-section">
                     <span className="q-section-title">Output Format:</span>
                     <p className="q-text">{q.outputFormat}</p>
                  </div>
                )}
              </div>
            )}

            {/* Constraints */}
            {q.constraints && q.constraints.length > 0 && (
              <div className="q-section">
                <span className="q-section-title">Constraints:</span>
                <ul className="constraints-list">
                  {q.constraints.map((constraint, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: constraint }} />
                  ))}
                </ul>
              </div>
            )}

            {/* Examples */}
            {q.examples && q.examples.length > 0 && (
              <div className="q-section">
                <span className="q-section-title">Examples:</span>
                {q.examples.map((ex, i) => (
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
        ))}
      </div>
    </div>
  );
};

export default TopicPage;