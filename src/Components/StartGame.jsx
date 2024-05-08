import styled from 'styled-components';

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 90vh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 20px;

justify-content  : center ;
}

  img {
    max-width: 100%;
    height: auto;

    @media (max-width: 768px) {
      max-width: 200px;
    }
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 96px;
  line-height: 144px;
  
  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 72px;
    margin-bottom: 20px;
  }
`;
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 24px;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <ImageContainer>
        <img src="/images/dices.png" alt="" />
      </ImageContainer>
      <div>
        <Title>Dice Game</Title>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
