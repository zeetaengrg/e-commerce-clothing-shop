import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
  padding: 1rem 2rem;
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
  flex: 1;
  gap: 3rem;
  text-align: center;
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
  width: 211px;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  text-transform: uppercase;
  align-items: center;
`;
