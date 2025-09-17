import React from "react";
import { useParams } from "react-router-dom";

const TopicPage = () => {
  const { topicName } = useParams();

  return (
    <div>
      <h1>{topicName} Questions</h1>
      <p>Here, you can see a list of all questions related to {topicName}.</p>
    </div>
  );
};

export default TopicPage;
