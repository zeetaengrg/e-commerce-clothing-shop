import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Header from '../Header/Header';

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
    background-color: #f5f5f5;
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

const CategoryItems = ({item}) => {
    return (
        <>
            <Container>
                <Image src={item.img} />
                <Info>
                    <Header item={item} />
                    <Button />
                </Info>
            </Container>    
        </>
    )
}

export default CategoryItems;
