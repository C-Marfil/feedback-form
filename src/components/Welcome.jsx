import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const Welcome = ({ setNameCompany }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = e.target.elements.name.value;
    const companyInput = e.target.elements.company.value;
    const updatedNameCompany = { name: nameInput, company: companyInput };
    setNameCompany(updatedNameCompany);
    navigate("/cuestionario");
  };

  return (
    <div>
      <img src="/assets/WelcomeText.png" alt="welcome text" />
      <img src="/assets/Titulo1.png" alt="welcome text" />
      <img src="/assets/InputBox.png" alt="welcome text" />
      <img src="/assets/InputBox.png" alt="welcome text" />
      <img src="/assets/button.png" alt="welcome text" />
      <img src="/assets/ACEPTO.png" alt="welcome text" />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" name="name" />
        <input type="text" placeholder="Empresa" name="company" />
        <button type="submit" aria-label="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

Welcome.propTypes = {
  setNameCompany: PropTypes.func.isRequired,
};

export default Welcome;
