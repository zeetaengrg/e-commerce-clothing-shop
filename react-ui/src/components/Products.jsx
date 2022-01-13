import { FavoriteBorder, Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;    
    transition: all 0.5s ease;
    cursor: pointer;
    z-index: 3;
`;

const Container = styled.div`
    flex: 1;
    min-width: 300px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    background-color: #f5fdfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Circle = styled.div`
    background-color: white;
    width: 200px;
    height: 200px;
    border: none;
    border-radius: 50%;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    object-fit: cover;
    z-index: 2;
`;

const Icons = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Products = ({product}) => {
    return (
        <React.Fragment>
            <Container>
                <Circle />
                <Image src={product.img} />
                <Info>
                    <Icons>
                        <ShoppingCartOutlined />
                    </Icons>
                    <Icons>
                        <Search />
                    </Icons>
                    <Icons>
                        <FavoriteBorder />
                    </Icons>
                </Info>
            </Container>
        </React.Fragment>
    )
}

export default Products;
