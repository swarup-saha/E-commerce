import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Top = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  border: ${(props) => props.color === "filled" && "none"};
  background: ${(props) =>
    props.color === "filled" ? "black" : "transparent"};
  color: ${(props) => props.color === "filled" && "white"};
  cursor: pointer;
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 20px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  background-color: ${(props) => props.color};
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductAmount = styled.span`
  margin: 5px;
  font-size: 20px;
`;
const ProductPrice = styled.span`
  display: flex;
  font-size: 30px;
  margin-top: 20px;
  font-weight: 300;
`;

const Hr = styled.hr`
  border: none;
  background-color: #eee;
  height: 1px;
  margin: 10px 0px;
`;
const Summary = styled.div`
  flex: 1;
  height: 50vh;
  border: 1px solid #eee;
  border-radius: 10px;
`;

const SummaryDetail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.type === "total" && "24px"};
  font-weight: ${(props) => props.type === "total" && 600};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  padding: 8px;
  background-color: black;
  color: white;
  letter-spacing: 1.2px;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const KEY_ID = "rzp_test_E3pl33DNO3tqap";
  const paymentProcess = (data, API_URL) => {
    console.log("hiiiiii", data, process.env.KEY_ID);
    const options = {
      key: KEY_ID,
      name: "Your App Name",
      description: "Some Description",
      order_id: data.id,
      handler: async (response) => {
        try {
          const captureResponse = await axios.post(
            `${API_URL}checkout/payment/verify`,
            { response }
          );
          console.log(captureResponse.data);
          navigate("/success", captureResponse.data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleOrder = async (e) => {
    try {
      const API_URL = `http://localhost:5000/api/`;
      const response = await axios.post(`${API_URL}orders/create`, {
        amount: cart.total,
      });
      const { data } = response;
      paymentProcess(data, API_URL);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton color="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((item, index) => (
              <>
                <Product>
                  <ProductDetail>
                    <Image src={item.img} />
                    <Details>
                      <ProductName>
                        {" "}
                        <b> Product: </b> {item.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {item._id}
                      </ProductId>
                      <ProductColor color="black"></ProductColor>
                      <ProductSize>
                        <b>Size:</b> {item.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{item.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>{item.price * item.quantity}</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}
          </Info>
          <Summary>
            <SummaryDetail>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>{cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice> 60</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice> -60</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>{cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton onClick={handleOrder}>CHECKOUT NOW</SummaryButton>
            </SummaryDetail>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
