import React from 'react';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterLinks from './FooterLinks/FooterLinks';
import FooterContact from './FooterContact/FooterContact';
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
