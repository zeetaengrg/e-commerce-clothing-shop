import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    background-color: #fff;
    opacity: 0.5;
    height: 2.5rem;
    width: 6rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-top: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    :hover {
        background-color: #707070;
    }
`;

const Button = () => {
    return (
        <>
            <Btn>SHOP NOW</Btn>
        </>
    )
}

export default Button;
