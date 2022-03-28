import React from "react";
import { hoodiesWear } from "../../../data";
import { Products } from "../../elements";
import { Container } from "./Hoodies.styles";

const Hoodies = ({ category, filters, sort }) => {
  return (
    <React.Fragment>
      <Container>
        {hoodiesWear.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Hoodies;
