import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Title,
    List,
    LinksList,
    NavLink,
} from "./FooterLinks.styles";

const FooterLinks = () => {
    return (
        <React.Fragment>
            <Container>
                <Title>Useful Links</Title>
                <List>
                    <LinksList>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <NavLink>Home</NavLink>
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
                </List>
            </Container>
        </React.Fragment>
    );
};

export default FooterLinks;
