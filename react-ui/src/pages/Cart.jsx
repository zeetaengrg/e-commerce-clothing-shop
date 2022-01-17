import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import FooterSection from '../components/FooterSection';
import CartContainer from '../container/CartContainer';

const Container = styled.div`

`;

const Cart = () => {
    return (
        <React.Fragment>
            <Container>
                <Announcements />
                <Navbar />
                <CartContainer />
                <FooterSection />
            </Container>            
        </React.Fragment>
    )
}

export default Cart;
