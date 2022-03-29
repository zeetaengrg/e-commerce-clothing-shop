import React from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "../../elements";
import { Container, Image, Info } from "./CategoryItems.styles";

const CategoryItems = ({ item }) => {
  return (
    <>
      <Container>
        <Image src={item.img} />
        <Info>
          <Header item={item} />
          {item.category === "jeans" ? (
            <Link to={`/products/${item.category}`}>
              <Button />
            </Link>
          ) : item.category === "jackets" ? (
            <Link to={`/products/${item.category}`}>
              <Button />
            </Link>
          ) : item.category === "tshirts" ? (
            <Link to={`/products/${item.category}`}>
              <Button />
            </Link>
          ) : item.category === "hoodies" ? (
            <Link to={`/products/${item.category}`}>
              <Button />
            </Link>
          ) : item.category === "suits" ? (
            <Link to={`/products/${item.category}`}>
              <Button />
            </Link>
          ) : (
            <Link to={`/products/${item.category}`}>
              <Button />
            </Link>
          )}
        </Info>
      </Container>
    </>
  );
};

export default CategoryItems;
