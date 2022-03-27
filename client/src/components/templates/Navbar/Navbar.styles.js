import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div``;

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
    gap: 1rem;
    text-align: center;
`;

export const NavLink = styled.span`
    color: black;
    text-decoration: none;
    text-transform: uppercase;
`;

// export const Language = styled.div`
//     font-size: 1rem;
//     cursor: pointer;
//     align-items: center;
//     display: flex;
//     ${mobile({ display: 'none' })};
// `;

export const SearchContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    ${mobile({ display: "none" })};
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font-size: 1rem;
    padding-left: 0.2rem;
    ${mobile({ width: "50px" })};
`;

export const Center = styled.div`
    flex: 1;
    text-align: center;
`;

export const LogoContainer = styled.a`
    text-decoration: none;
`;

export const Logo = styled.img`
    width: 211px;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    text-transform: uppercase;
    align-items: center;
`;
