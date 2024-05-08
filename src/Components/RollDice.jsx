import React, { useState } from "react";
import styled from "styled-components";
import Rules from "./Rules";

const RollDice = ({ handleRollDice, currentDice, setScore }) => {
  const [showRules, setShowRules] = useState(false);

  function resetScore() {
    console.log("hhh");
    setScore(0);
  }

  return (
    <DiceContainer>
      <div className="dice" onClick={handleRollDice}>
        <img
          src={`/images/dice_${currentDice}.png`}
          alt={`dice_${currentDice}`}
        />
      </div>

      <p>Click on Dice to roll</p>

      <div className="btn">
        <button className="Score" onClick={resetScore}>
          {" "}
          Reset Score{" "}
        </button>
        {/* <button className="Rules" onClick={showRules}> Show rules </button> */}

        <button className="Rules" onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>

      {showRules && <Rules />}
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -90px;
  justify-content: center;

  p {
    margin-top: -10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
  .dice {
    cursor: pointer;
  }

  .Score {
    color: black;
    background-color: white;
    width: 150px;
    height: 30px;
    font-family: poppins;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid black;
  }
  .Rules {
    color: white;
    background-color: black;
    width: 150px;
    height: 30px;
    font-family: poppins;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid black;
  }
  .btn {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
