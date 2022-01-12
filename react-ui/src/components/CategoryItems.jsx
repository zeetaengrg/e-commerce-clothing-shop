import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    height: 70vh;
    margin: 0.5rem;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`

`;

const Button = styled.button`
    background-color: transparent;
    height: 2.5rem;
    width: 6rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    :hover {
        color: teal;
        border-color: teal;
    }
`;

const CategoryItems = ({item}) => {
    return (
        <>
            <Container>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Container>    
        </>
    )
}

export default CategoryItems;
