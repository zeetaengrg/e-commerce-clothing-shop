import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
    flex: 1;
    height: 60vh;
    margin: 0.5rem;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`

`;

const Title = styled.h1`

`;

const Description = styled.p`

`;

const NewArrivals = ({item}) => {
    return (
        <React.Fragment>
            <Container>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Button />
                </Info>
            </Container>
        </React.Fragment>
    )
}

export default NewArrivals;
