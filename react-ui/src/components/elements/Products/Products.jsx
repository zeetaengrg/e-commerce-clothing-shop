import { FavoriteBorder, Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import { Info, Container, Circle, Image, Icons } from './Products.styles';

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
