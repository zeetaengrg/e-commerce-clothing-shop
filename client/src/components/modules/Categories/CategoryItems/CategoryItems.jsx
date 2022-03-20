import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header } from '../../../elements';
import { Container, Image, Info } from './CategoryItems.styles';

const CategoryItems = ({item}) => {
    return (
        <>
            <Container>
                <Image src={item.img} />
                <Info>
                    <Header item={item} />
                    {item.title === "jeans" ? (
                        <Link to={`/products/${item.category}`} >
                            <Button />
                        </Link>
                    ) : item.title === "jackets" ? (
                        <Link to={`/products/${item.category}`}>
                            <Button />
                        </Link>
                    ) : (
                        <Link to={`/products/${item.category}`}>
                            <Button />
                        </Link>
                    )}
                </Info>
            </Container>
        </>
    );
}

export default CategoryItems;
