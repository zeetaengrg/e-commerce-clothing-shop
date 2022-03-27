import React from "react";
import { Products } from "../../elements";
import { shirtsWear } from "../../../data";
import { Container } from "./Tshirts.styles";

const MaleTshirts = ({ category, filters, sort }) => {
    return (
        <React.Fragment>
            <Container>
                {shirtsWear.map((product) => (
                    <Products key={product.id} product={product} />
                ))}
            </Container>
        </React.Fragment>
    );
};

export default MaleTshirts;
