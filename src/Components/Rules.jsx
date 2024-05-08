import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p className="para">👉Select any number</p>
        <p className="para">👉 Click on dice image</p>
        <p className="para">
          👉 after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p className="para">
          👉 if you get wrong guess then 2 point will be dedcuted{" "}
        </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;

  padding: 10px;
  border: 1pz solid #fbf1f1;

  border-radius: 10px;

  .text {
    margin-top: 10px;
    /* font-size: 10px; */
  }
  .para {
    font-size: 15px;
  }
`;
