import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
    height: 50px;
`;

export const Wrapper = styled.div`
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Left = styled.div`
    display: flex;
    flex: 1;
    gap: 1rem;
`;

export const Language = styled.div`
    font-size: 1rem;
    cursor: pointer;
    align-items: center;
    display: flex;
    ${mobile({ display: 'none' })};
`;

export const SearchContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    ${mobile({ marginLeft: 0 })};
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font-size: 1rem;
    padding-left: 0.2rem;
    ${mobile({ width: '50px' })};
`;

export const Center = styled.div`
    flex: 1;
    text-align: center;
`;

export const Logo = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    text-transform: uppercase;
    align-items: center;
    /* ${mobile({ flex: '2' })}; */
`;

export const MenuItem = styled.div`
    font-size: 1rem;
    cursor: pointer;
`;