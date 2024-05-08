import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError(""); 
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => {
              numberSelectorHandler(value);
            }}
          >
            {value}
          </Box>
        ))}
      </div>
      <h2>Selected Number: {selectedNumber}</h2> {/* Display selected number */}
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;

  .flex {
    gap: 15px;
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    margin-bottom: 15px; 
  }

  h2 {
    font-family: Poppins;
    color: black;
    font-size: 18px;
    margin-top: 15px; 
  }

  .error {
    color: red;
    font-size: 14px; /* Adjust error message font size */
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    margin: 74px;
    .flex {
      gap: 10px; 
    }

    h2 {
      font-size: 16px; 
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  @media (max-width: 768px) {
    height: 40px;
    width: 50px; 
    font-size: 14px; 
  }
`;
