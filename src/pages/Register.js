import { useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethod";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 20px 10px 0px 0px;
`;
const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  padding: 15px 20px;
  background-color: teal;
  color: white;
  width: 40%;
  cursor: pointer;
  border: none;
`;
const Error = styled.div`
  color: red;
`;
const Register = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleDetails = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    if (userDetails.password === userDetails.confirmPassword) {
      await publicRequest.post("/auth/register", userDetails);
    } else {
      setError("password is incorrect!");
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="first name"
            type="text"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleDetails}
          />
          <Input
            placeholder="last name"
            type="text"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleDetails}
          />
          <Input
            placeholder="username"
            type="text"
            name="userName"
            value={userDetails.userName}
            onChange={handleDetails}
          />
          <Input
            placeholder="email"
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleDetails}
          />
          <Input
            placeholder="password"
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleDetails}
          />
          <Input
            placeholder="confirm password"
            type="password"
            name="confirmPassword"
            value={userDetails.confirmPassword}
            onChange={handleDetails}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
          <Error>{error}</Error>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
