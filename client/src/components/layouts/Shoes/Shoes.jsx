import React from "react";
import { shoesWear } from "../../../data";
import { Products } from "../../elements";
import { Container } from "./Shoes.styles";

const Shoes = ({ category, filters, sort }) => {
    return (
        <React.Fragment>
            <Container>
                {shoesWear.map((product) => (
                    <Products key={product.id} product={product} />
                ))}
            </Container>
        </React.Fragment>
    );
};

export default Shoes;
