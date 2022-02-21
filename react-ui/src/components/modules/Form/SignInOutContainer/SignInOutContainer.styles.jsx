import styled from 'styled-components';
// import { mobile } from '../../../responsive';

export const Box = styled.div`

`;

export const Text = styled.p`

`;

export const Button = styled.button`
    color: black;
    font-family: inherit;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 0.2rem;
    border: 1px solid black;
    padding: 0 1rem;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: black;
        color: white;
    };
`;

export const Modal = styled.div`
    transition: all 0.3s ease-in-out;
`;

export const Paper = styled.div`
    width: 340;
    margin: 20px auto;
    background-color: antiquewhite;
`;

export const TabContainer = styled.div`
`;

export const Tab = styled.div`
    font-family: inherit;
    font-size: 1rem;
`;