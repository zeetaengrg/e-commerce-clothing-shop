import * as React from 'react';
import styled from 'styled-components';
import { newArrivalsItems } from '../data';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Image = styled.img`

`;

const Info = styled.div`

`;

const Title = styled.h1`

`;

const Description = styled.p`

`;

const Button = styled.button`

`;

const NewArrivals = () => {
    return (
        <React.Fragment>
            {newArrivalsItems.map(item => (
                <Container>
                    <Image src={item.img}/>
                    <Info>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <Button>SHOP NOW</Button>
                    </Info>
                </Container>
            ))};
        </React.Fragment>
    )
}

export default NewArrivals;
