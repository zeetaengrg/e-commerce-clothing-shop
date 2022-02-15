import React from 'react';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Container, Title, Description, Icons } from './FooterInfo.styles';

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
                    <Facebook style={{marginRight: "0.5rem"}}/>
                    <Instagram style={{marginRight: "0.5rem"}} />
                    <Twitter />
                </Icons>
            </Container>
        </React.Fragment>
    )
}

export default FooterInfo;
