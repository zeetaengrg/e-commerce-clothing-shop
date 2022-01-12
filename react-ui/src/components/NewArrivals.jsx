import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`

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

const NewArrivals = ({item}) => {
    return (
        <React.Fragment>
            <Container>
                <Image />
                <Info>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Button>SHOP NOW</Button>
                </Info>
            </Container>
        </React.Fragment>
    )
}

export default NewArrivals;
