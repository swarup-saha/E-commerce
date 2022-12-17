import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethod";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
  /* margin-right: 20px; */
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  margin: 20px;
`;
const Title = styled.h1`
  font-weight: 200;
  display: flex;
  margin: 20px 0px;
`;
const Desc = styled.p`
  font-weight: 200;
  margin-bottom: 20px;
`;
const Price = styled.div`
  font-weight: 200;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
const FilterTitle = styled.span`
  margin-right: 10px;
`;
const FilterColor = styled.div`
  background-color: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;
const FilterSize = styled.select`
  padding: 7px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  width: 50%;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0px 10px;
`;
const Button = styled.button`
  padding: 15px;
  background-color: white;
  border: 2px solid teal;
  cursor: pointer;
  font-weight: 500;

  & :hover {
    background-color: #f8f4f4;
  }
`;
const Product = () => {
  const history = useLocation();
  const id = history.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      const res = await publicRequest.get(`products/find/` + id);
      setProduct(res.data);
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity((prev) => prev + 1);
    } else if (type === "dec") {
      quantity > 1 && setQuantity((prev) => prev - 1);
    }
  };

  const handleCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product?.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product?.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} cursor="pointer" />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} cursor="pointer" />
            </AmountContainer>
            <Button onClick={handleCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
