import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/resultados.css";

const CheeseImages = ({ answers, nameCompany }) => {
  const [hoveredCheese, setHoveredCheese] = useState(null);
  const { name, company } = nameCompany;
  let totalText;

  const handleMouseEnter = (index) => {
    setHoveredCheese(index);
  };

  const handleMouseLeave = () => {
    setHoveredCheese(null);
  };

  const total = answers.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue, 10),
    0
  );

  if (total > 50) {
    totalText = "Your total is over 50 well done";
  } else {
    totalText = "You need to work harder";
  }

  return (
    <div>
      <h1>Resultado {total > 0 ? total : 0}</h1>
      <p>
        {name} from {company}, {totalText}
      </p>
      <div className="cheese--full">
        {answers.map((answer, index) => {
          const cheeseClassName = `cheese cheese${answer}`;
          const isHovered = hoveredCheese === index;
          let conditionalCheese = null;

          if (answer < 5) {
            conditionalCheese = "/assets/conditionalCheese1.png";
          } else if (answer >= 5 && answer <= 8) {
            conditionalCheese = "/assets/conditionalCheese2.png";
          } else {
            conditionalCheese = "/assets/conditionalCheese3.png";
          }

          return (
            <div
              key={answer}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={`/assets/cheese${index}.png`}
                alt={`cheese${index}`}
                id={`cheese${index}`}
                className={cheeseClassName}
              />
              {isHovered && conditionalCheese && (
                <img
                  src={conditionalCheese}
                  alt={`conditionalCheese${index}`}
                  className="conditionalCheese"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

CheeseImages.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.number).isRequired,
  nameCompany: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  }).isRequired,
};

export default CheeseImages;
