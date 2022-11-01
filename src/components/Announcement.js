import styled from "styled-components"
// import { CurrencyRupeeOutlined } from '@material-ui/icons'
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.2px;
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over 500
    </Container>
  )
}

export default Announcement
