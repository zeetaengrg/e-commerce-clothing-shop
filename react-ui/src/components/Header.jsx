import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    background-color: #fff;
    opacity: 0.5;
    padding: 0rem 0.5rem;
    border-radius: 2rem;
    margin-bottom: 0.5rem;
`;

const Header = ({item}) => {
    return (
        <>
            <Title>
                {item.title}
            </Title>    
        </>
    )
}

export default Header;
