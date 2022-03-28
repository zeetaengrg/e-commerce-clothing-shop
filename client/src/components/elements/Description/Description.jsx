import React from "react";
import { Desc } from "./Description.styles";

const Description = ({ item }) => {
  return (
    <React.Fragment>
      <Desc>{item.description}</Desc>
    </React.Fragment>
  );
};

export default Description;
