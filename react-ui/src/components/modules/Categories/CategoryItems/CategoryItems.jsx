import React from 'react';
import Button from '../../../elements/Button/Button';
import Header from '../../../elements/Header/Header';
import { Container, Image, Info } from './CategoryItems.styles';

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
