import React from 'react';
import styled from 'styled-components';
import NewArrivals from '../NewArrivals/NewArrivals';
import { newArrivalsItems } from '../../data';

const Container = styled.div`
    display: flex;
`;

const NewArrivalCategory = () => {
    return (
        <React.Fragment>
            <Container>
                {newArrivalsItems.map(item => (
                    <NewArrivals item={item} key={item.id} />  
                ))}
            </Container>
        </React.Fragment>
    )
}

export default NewArrivalCategory;
