import React from 'react';
import styled from 'styled-components';
import NewArrivalItems from './NewArrivalItems';
import { newArrivalsItems } from '../data';

const Container = styled.div`
    display: flex;
`;

const NewArrivalCategory = () => {
    return (
        <React.Fragment>
            <Container>
                {newArrivalsItems.map(item => (
                    <NewArrivalItems item={item}/>  
                ))}
            </Container>
        </React.Fragment>
    )
}

export default NewArrivalCategory;
