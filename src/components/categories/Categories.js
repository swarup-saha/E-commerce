import styled from "styled-components"
import { categories } from "../../constant/data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
const Categories = () => {
  return (<Container>
    {categories.map((item) => { return <CategoryItem item={item} /> })}
  </Container>
  )
}

export default Categories
