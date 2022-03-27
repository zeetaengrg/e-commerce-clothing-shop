import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
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
                    <FaFacebookSquare style={{marginRight: "0.5rem"}}/>
                    <FaInstagramSquare style={{marginRight: "0.5rem"}} />
                    <FaTwitterSquare />
                </Icons>
            </Container>
        </React.Fragment>
    )
}

export default FooterInfo;
