import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray; 
  background-color: white;
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
  outline: none;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
`
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
