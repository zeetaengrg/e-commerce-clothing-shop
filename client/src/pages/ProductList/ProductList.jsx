import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Footer } from "../../components/templates";
import { Announcements } from "../../components/elements";
import {
  Jackets,
  Jeans,
  Suits,
  Tshirts,
  Hoodies,
  Shoes,
} from "../../components/layouts";
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Options,
} from "./ProductList.styles";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const colorList = ["Grey", "Blue", "Brown", "White"];

  const sizeList = ["XS", "S", "M", "L", "XL", "XXL"];

  const brandList = [
    "Levis",
    "Denim",
    "Diesel",
    "Calvin Klein",
    "Wrangler",
    "Lee",
  ];

  return (
    <React.Fragment>
      <Container>
        <Announcements />
        <Navbar />
        <Title>{category}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter By:</FilterText>
            <Select name="color" onChange={handleFilters} defaultValue="Color">
              <Options disabled>Color</Options>
              {colorList.map((item) => {
                return <Options key={item}>{item}</Options>;
              })}
            </Select>
            <Select name="size" onChange={handleFilters} defaultValue="Size">
              <Options disabled value="Size">
                Size
              </Options>
              {sizeList.map((size) => {
                return <Options key={size}>{size}</Options>;
              })}
            </Select>
            <Select name="brand" onChange={handleFilters} defaultValue="Brand">
              <Options disabled value="Brand">
                Brand
              </Options>
              {brandList.map((brand) => {
                return <Options key={brand}>{brand}</Options>;
              })}
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort By:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Options value="newest">Newest</Options>
              <Options value="lowToHigh">Price: Low to High</Options>
              <Options value="highToLow">Price: High to Low</Options>
            </Select>
          </Filter>
        </FilterContainer>
        {category === "jeans" ? (
          <Jeans category={category} filters={filters} sort={sort} />
        ) : category === "jackets" ? (
          <Jackets category={category} filters={filters} sort={sort} />
        ) : category === "tshirts" ? (
          <Tshirts category={category} filters={filters} sort={sort} />
        ) : category === "hoodies" ? (
          <Hoodies category={category} filters={filters} sort={sort} />
        ) : category === "suits" ? (
          <Suits category={category} filters={filters} sort={sort} />
        ) : (
          <Shoes category={category} filters={filters} sort={sort} />
        )}
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default ProductList;
