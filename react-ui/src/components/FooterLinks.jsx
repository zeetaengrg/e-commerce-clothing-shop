import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 1rem;
`;

const Title = styled.h3`
    margin-bottom: 1rem;
`;

const Links = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: #000;
    display: flex;
    flex-wrap: wrap;
`;

const LinksList = styled.li`
    width: 50%;
    margin-bottom: 0.5rem;
`;

const FooterLinks = () => {
    return (
        <React.Fragment>
            <Container>
                <Title>Useful Links</Title>
                <Links>
                    <LinksList to="/">Home</LinksList>
                    <LinksList>Man Fashion</LinksList>
                    <LinksList>Accessories</LinksList>
                    <LinksList>Order Tracking</LinksList>
                    <LinksList>Categories</LinksList>
                    <LinksList>Cart</LinksList>
                    <LinksList>Woman Fashion</LinksList>
                    <LinksList>My Account</LinksList>
                    <LinksList>Wishlist</LinksList>
                    <LinksList>Terms & Conditions</LinksList>
                </Links>
            </Container>
        </React.Fragment>
    )
}

export default FooterLinks;
