import React, { useState } from "react";
import { useNavigate } from "react-router";
import Question from "./Question";

const Cuestionario = ({ setAnswers, answers }) => {
  const [currentAnswer, setCurrentAnswer] = useState("");
  const navigate = useNavigate();
  const questionNumber = answers.length;

  const handleNext = () => {
    setAnswers([...answers, currentAnswer]);
    setCurrentAnswer("");
    if (questionNumber === 9) {
      navigate("/resultados");
    }
  };

  return (
    <div>
      <Question questionNumber={questionNumber} />
      <select
        className="answer"
        value={currentAnswer}
        onChange={(e) => setCurrentAnswer(e.target.value)}
      >
        <option value="0"> Elije tu respuesta </option>
        <option value="0"> Nunca </option>
        <option value="5"> A veces </option>
        <option value="8"> Casi siempre </option>
        <option value="10"> Siempre </option>
      </select>
      <button type="button" onClick={handleNext}>
        Siguiente
      </button>
    </div>
  );
};

export default Cuestionario;
