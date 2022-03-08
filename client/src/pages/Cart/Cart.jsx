import React from 'react';
import { Navbar, Footer } from '../../components/layouts'
import { Announcements } from '../../components/elements'
import { CartContainer } from '../../components/templates';

const Cart = () => {
    return (
        <React.Fragment>
            <Announcements />
            <Navbar />
            <CartContainer />
            <Footer />
        </React.Fragment>
    );
}

export default Cart;
