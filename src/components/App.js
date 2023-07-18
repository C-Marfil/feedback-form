import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Welcome from "./Welcome";
import Cuestionario from "./Cuestionario";
import "../styles/App.css";

const App = () => {
  const [nameCompany, setNameCompany] = useState({});
  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome setNameCompany={setNameCompany} />} />
        <Route
          path="/cuestionario"
          element={<Cuestionario answers={answers} setAnswers={setAnswers} />}
        />
      </Routes>
    </div>
  );
};

export default App;
