import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  text-align: center;

  h1 {
    margin-top: 0px;
    font-size: 100px;
  }
  p {
    margin-top: 0px;
    padding-top: 0px;
    font-size: 24px;
    line-height: 34px;
    font-weight: 500;
  }
`;
