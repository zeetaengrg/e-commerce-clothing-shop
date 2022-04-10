import React, { useState, useEffect } from "react";
import { Products } from "../../elements";
import { Container } from "./Jeans.styles";
import axios from "axios";

const Jeans = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : `http://localhost:5000/api/products`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, products, filters]);

  useEffect(() => {
    const sortProducts = () => {
      if (sort === "newest") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sort === "lowToHigh") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } else {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    };
    sortProducts();
  }, [sort]);

  return (
    <React.Fragment>
      <Container>
        {filteredProducts.map((product) => (
          <Products key={product._id} product={product} />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Jeans;
