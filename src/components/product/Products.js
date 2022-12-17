import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products/all/products?category=${cat}`
            : "http://localhost:5000/api/products/all/products"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getAllProduct();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProduct(
        products?.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  useEffect(() => {
    if (sort === "newest") {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filterProduct.map((item) => {
            return <ProductItem item={item} key={item._id} />;
          })
        : products.slice(0, 8).map((item) => {
            return <ProductItem item={item} key={item._id} />;
          })}
    </Container>
  );
};

export default Products;
