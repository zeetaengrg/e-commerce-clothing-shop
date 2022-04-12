import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
  padding: 0.5rem 2rem;
`;

export const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0px 10px" })}
`;

export const Left = styled.div`
  display: flex;
  text-align: center;
  flex: 1;
  gap: 3rem;
`;

export const NavLink = styled.span`
  color: black;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: grey;
  }
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 13rem;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  text-transform: uppercase;
  align-items: center;
`;

export const RegisterLink = styled.a`
  text-transform: uppercase;
  min-width: 5rem;
  height: 2rem;
  color: black;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  outline: none;
  border-radius: 2rem;
  border: none;
  background: #f5f5f5;
  opacity: 0.8;
  z-index: 1;

  :hover::after {
    width: 100%;
    left: 0;
  }

  ::after {
    border-radius: 2rem;
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    z-index: -1;
    transition: all 0.3s ease;
    background-color: #ced4da;
    right: 0;
  }

  :active {
    top: 2px;
  }

  /* color: black;
  font-family: inherit;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 0.3rem;
  border: 1px solid black;
  padding: 0.2rem 0.5rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  } */
`;

export const QuantityContainer = styled.div`
  position: relative;
`;

export const QuantityIcon = styled.span``;

export const Quantity = styled.span`
  background-color: teal;
  height: 1.1rem;
  width: 1.1rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  border-radius: 50%;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  display: ${(props) => (props.quantity > 0 ? "grid" : "none")};
  place-items: center;
  user-select: none;
`;
