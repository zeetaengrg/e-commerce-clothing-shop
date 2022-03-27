import React from "react";
import { NewArrivals } from "../../modules";
import { newArrivalsItems } from "../../../data";
import { Container } from "./NewArrivalCategory.styles";

const NewArrivalCategory = () => {
    return (
        <React.Fragment>
            <Container>
                {newArrivalsItems.map((item) => (
                    <NewArrivals item={item} key={item.id} />
                ))}
            </Container>
        </React.Fragment>
    );
};

export default NewArrivalCategory;
