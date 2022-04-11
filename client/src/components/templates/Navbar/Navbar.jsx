import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
  Container,
  Wrapper,
  Left,
  NavLink,
  Center,
  Logo,
  Right,
  Quantity,
  QuantityContainer,
  QuantityIcon,
  RegisterLink,
} from "./Navbar.styles";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/">
              <NavLink>Home</NavLink>
            </Link>
            <Link to="/about-us">
              <NavLink>About Us</NavLink>
            </Link>
            <Link to="/products">
              <NavLink>Products</NavLink>
            </Link>
          </Left>
          <Center>
            <Link to="/">
              <Logo src="/images/logo.png" alt="Company Logo" />
            </Link>
          </Center>
          <Right>
            <RegisterLink href="/register">Register</RegisterLink>
            <QuantityContainer>
              <Link to="/cart">
                <NavLink>
                  <QuantityIcon>
                    <MdOutlineShoppingCart
                      style={{
                        fontSize: "1.5rem",
                      }}
                    />
                  </QuantityIcon>
                </NavLink>
              </Link>
              <Quantity quantity={quantity}>{quantity}</Quantity>
            </QuantityContainer>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
