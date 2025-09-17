import React from "react";
import { useParams } from "react-router-dom";

const QuestionPage = () => {
  const { topicName, questionName } = useParams();

  return (
    <div>
      <h1>{questionName} - {topicName}</h1>
      <p>Details of the question: {questionName} from {topicName}.</p>
    </div>
  );
};

export default QuestionPage;
