import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Announcements from '../../components/Announcements/Announcements';
import Footer from '../../components/Footer/Footer';
import CartContainer from '../../components/CartContainer/CartContainer';

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
