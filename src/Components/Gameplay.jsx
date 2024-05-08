import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);

  function generateRandomNumber() {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 6) + 1;
    return randomNumber;
  }

  const handleRollDice = () => {
    const randomNumber = generateRandomNumber();
    setCurrentDice(randomNumber);

    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <TopSection>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </TopSection>

      <RollDice currentDice={currentDice} setScore={setScore} handleRollDice={handleRollDice} />
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
`;
