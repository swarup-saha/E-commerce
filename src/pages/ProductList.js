import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/product/Products";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  margin: 20px;
`;
const FilterText = styled.span`
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;
`;
const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
`;
const Option = styled.option``;

const ProductList = () => {
  const history = useLocation();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const cat = history.pathname.split("/")[2];
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilter} defaultValue="Color">
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilter} defaultValue="Size">
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Low to High</Option>
            <Option value="desc">High to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} sort={sort} filters={filters} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
