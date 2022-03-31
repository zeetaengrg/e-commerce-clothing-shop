import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import SignInOutContainer from "../../modules/Form/SignInOutContainer/SignInOutContainer";
import {
  Container,
  Wrapper,
  Left,
  NavLink,
  Center,
  Logo,
  Right,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <React.Fragment>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavLink>Home</NavLink>
            </Link>
            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <NavLink>About Us</NavLink>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <NavLink>Products</NavLink>
            </Link>
          </Left>
          <Center>
            <Link to="/">
              <Logo src="/images/logo.png" alt="Company Logo" />
            </Link>
          </Center>
          <Right>
            <SignInOutContainer />
            <MdOutlineShoppingCart
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            />
          </Right>
        </Wrapper>
      </Container>
    </React.Fragment>
  );
};

export default Navbar;
