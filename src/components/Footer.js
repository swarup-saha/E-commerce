import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: white;
`;
const Left = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-size: 20px;
`;
const SocialDesc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  list-style: none;
  display:flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 30px;
`
const Payment = styled.img`
  width: 50%;
  cursor: pointer;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>JP</Logo>
        <SocialDesc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </SocialDesc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
      <Title>Contact</Title>
        <ContactItem>
          <Room  style={{marginRight: "10px"}} /> 622 Madhya para  , Alipurduar, 736121
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}} /> +91 629 54 28 386
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}} /> swarupsaha340@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
