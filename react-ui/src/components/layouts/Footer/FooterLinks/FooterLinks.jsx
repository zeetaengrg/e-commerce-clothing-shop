import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Links, LinksList, NavLink } from './FooterLinks.styles';

const FooterLinks = () => {
    return (
        <React.Fragment>
            <Container>
                <Title>Useful Links</Title>
                <Links>
                    <LinksList>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <NavLink href='/'>Home</NavLink>
                        </Link>
                    </LinksList>
                    <LinksList>Men Fashion</LinksList>
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
    );
}

export default FooterLinks;
