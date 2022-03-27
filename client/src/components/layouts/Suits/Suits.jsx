import React from "react";
import { Products } from "../../elements";
import { suitsWear } from "../../../data";
import { Container } from "./Suits.styles";

const MaleSuits = ({ category, filters, sort }) => {
    return (
        <React.Fragment>
            <Container>
                {suitsWear.map((product) => (
                    <Products key={product.id} product={product} />
                ))}
            </Container>
        </React.Fragment>
    );
};

export default MaleSuits;
