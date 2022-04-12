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
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  color: black;
  z-index: 1;
  background: #f5f5f5;
  opacity: 0.8;
  position: relative;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 2rem;
    border: none;
    background-color: black;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }

  :hover {
    color: #f5f5f5;
  }

  :hover::before {
    width: 100%;
  }
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
