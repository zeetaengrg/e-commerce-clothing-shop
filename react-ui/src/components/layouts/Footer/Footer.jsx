import React from 'react';
import { FooterContact, FooterInfo, FooterLinks } from '.';
import { Container } from './Footer.styles';

const FooterSection = () => {
    return (
        <React.Fragment>
            <Container>
                <FooterInfo />
                <FooterLinks />
                <FooterContact />
            </Container>
        </React.Fragment>
    )
}

export default FooterSection;
