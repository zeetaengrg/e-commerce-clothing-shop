import { FavoriteBorder, Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const Circle = styled.div`

`;

const Image = styled.img`

`;

const Info = styled.div`

`;

const Icons = styled.div`

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
                        <Search />
                        <FavoriteBorder />
                    </Icons>
                </Info>
            </Container>
        </React.Fragment>
    )
}

export default Products;
