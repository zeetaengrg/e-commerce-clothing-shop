import React from "react";
import { jacketsWear } from "../../../data";
import { Products } from "../../elements";
import { Container } from "./Jackets.styles";

const Jackets = ({ category, filters, sort }) => {
  return (
    <React.Fragment>
      <Container>
        {jacketsWear.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Jackets;
