import React from "react";
import PropTypes from "prop-types";

const Question = ({ questionNumber }) => {
  const getImagePath = () => {
    const images = [
      "/assets/question0.png",
      "/assets/question1.png",
      "/assets/question2.png",
      "/assets/question3.png",
      "/assets/question4.png",
      "/assets/question5.png",
      "/assets/question6.png",
      "/assets/question7.png",
      "/assets/question8.png",
      "/assets/question9.png",
    ];
    return images[questionNumber] || "/assets/error.png";
  };

  return <img src={getImagePath()} alt="Question" />;
};

Question.propTypes = {
  questionNumber: PropTypes.number.isRequired,
};

export default Question;
