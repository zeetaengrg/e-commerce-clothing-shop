import React from 'react';
import { Container, Title, Links, LinksList } from './FooterLinks.styles';

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
