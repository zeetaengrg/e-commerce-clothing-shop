import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Container = styled.div`
    flex: 1;
`;

const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
`;

const Description = styled.p`

`;

const Icons = styled.div`

`;

const FooterInfo = () => {
    return (
        <React.Fragment>
            <Container>
                <Title>
                    Logo
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolorem provident, quisquam aspernatur cumque numquam odio cupiditate consectetur facere fugit tenetur obcaecati magnam repellat iste pariatur aut quos ipsum sunt.
                </Description>
                <Icons>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </Icons>
            </Container>
        </React.Fragment>
    )
}

export default FooterInfo;
