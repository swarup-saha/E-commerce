import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;
const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid lightGrey;
  margin-left: 25px;
  padding: 5px;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search
              style={{ fontSize: "16px", color: "grey", cursor: "pointer" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>JP</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
