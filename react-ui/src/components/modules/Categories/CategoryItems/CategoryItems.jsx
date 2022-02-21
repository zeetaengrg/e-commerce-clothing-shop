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
                    {item.title === "Jeans" ? (
                        <Link to="/male/jeans" >
                            <Button />
                        </Link>
                    ) : item.title === "Jackets" ? (
                        <Link to="/male/jackets">
                            <Button />
                        </Link>
                    ) : (
                        <Link to="/male/tshirts">
                            <Button />
                        </Link>
                    )}
                </Info>
            </Container>
        </>
    );
}

export default CategoryItems;
