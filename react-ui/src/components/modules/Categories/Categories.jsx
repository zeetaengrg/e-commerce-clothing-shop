import React from 'react';
import CategoryItems from './CategoryItems/CategoryItems';
import { categories } from '../../../data';
import { Container } from './Categories.styles';

const Categories = () => {
    return (
        <React.Fragment>
            <Container>
                {categories.map(item => (
                    <CategoryItems item={item} key={item.id} />
                ))}
            </Container>   
        </React.Fragment>
    )
}

export default Categories;
