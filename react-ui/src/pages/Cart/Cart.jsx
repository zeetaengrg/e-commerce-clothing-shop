import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/layouts/Navbar/Navbar';
import Announcements from '../../components/elements/Announcements/Announcements';
import Footer from '../../components/layouts/Footer/Footer';
import CartContainer from '../../components/templates/CartContainer/CartContainer';

const Container = styled.div`

`;

const Cart = () => {
    return (
        <React.Fragment>
            <Container>
                <Announcements />
                <Navbar />
                <CartContainer />
                <Footer />
            </Container>            
        </React.Fragment>
    )
}

export default Cart;
