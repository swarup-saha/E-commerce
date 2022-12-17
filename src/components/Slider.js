import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../constant/data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  // z-index: 2;
`;
const Arrow = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff7f7;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Image = styled.img`
  height: 80%;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 50px 0px;
  width: 70%;
`;
const Button = styled.button`
  font-size: 20px;
  padding: 10px;
  background: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [selectIndex, setSelectIndex] = useState(0);
  const handleClick = (value) => {
    if (value === "left") {
      setSelectIndex(selectIndex > 0 ? selectIndex - 1 : 1);
    } else {
      setSelectIndex(selectIndex < 1 ? selectIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={selectIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title} </Title>
                <Desc>{item.desc} </Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
