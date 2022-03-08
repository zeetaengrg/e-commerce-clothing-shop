import styled from 'styled-components';

export const Btn = styled.a`
    background-color: #fff;
    opacity: 0.5;
    border-radius: 0.5rem;
    border: 2px solid grey;
    padding: 0.5rem;
    margin: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    :hover {
        background-color: #707070;
    };
    :active {
        scale: 1.025;
    }
`;