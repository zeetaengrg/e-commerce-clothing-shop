import React from 'react';
import styled from 'styled-components';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;



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
