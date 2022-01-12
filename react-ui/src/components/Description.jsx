import React from 'react';
import styled from 'styled-components';

const Desc = styled.p`
    background-color: #fff;
    opacity: 0.5;
    padding: 0rem 0.5rem;
    border-radius: 0.5rem;
`;

const Description = ({item}) => {
    return (
        <>
            <Desc>
                {item.description}
            </Desc>    
        </>
    )
}

export default Description;
