import React from "react";
import { CartContainer } from "../../components/layouts";
import { Announcements } from "../../components/elements";
import { Navbar, Footer } from "../../components/templates";

const Cart = () => {
    return (
        <React.Fragment>
            <Announcements />
            <Navbar />
            <CartContainer />
            <Footer />
        </React.Fragment>
    );
};

export default Cart;
