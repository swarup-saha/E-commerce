import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height:70vh;
  margin: 3px;
  position: relative;
  flex:1;
`

const Info = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left:0;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
const Button = styled.button`
  padding: 10px;
  border:none;
  background: white;
  color: grey;
  cursor: pointer;
  font-weight: bold;
`
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
