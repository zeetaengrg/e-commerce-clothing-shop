import React from 'react';
import { MdFavoriteBorder, MdSearch, MdOutlineShoppingCart } from 'react-icons/md';
import { Info, Container, Circle, Image, Icons } from './Products.styles';

const Products = ({product}) => {
    return (
        <React.Fragment>
            <Container>
                <Circle />
                <Image src={product.img} />
                <Info>
                    <Icons>
                        <MdOutlineShoppingCart />
                    </Icons>
                    <Icons>
                        <MdSearch />
                    </Icons>
                    <Icons>
                        <MdFavoriteBorder />
                    </Icons>
                </Info>
            </Container>
        </React.Fragment>
    )
}

export default Products;
