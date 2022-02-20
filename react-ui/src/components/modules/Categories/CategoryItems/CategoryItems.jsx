import React from 'react';
import { Button, Header } from '../../../elements';
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
