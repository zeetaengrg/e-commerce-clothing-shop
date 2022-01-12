import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
`;

const Title = styled.h3`

`;

const Links = styled.div`

`;

const LinksList = styled.ul`

`;

const FooterLinks = () => {
    return (
        <React.Fragment>
            <Container>
                <Title>Useful Links</Title>
                <Links>
                    <LinksList>
                        Home
                        Man Fashion
                        Accessories
                        Order Trackiing
                        Categories
                    </LinksList>
                    <LinksList>
                        Cart
                        Woman Fashion
                        My Account
                        Wishlist
                        Terms & Conditions
                    </LinksList>
                </Links>
            </Container>
        </React.Fragment>
    )
}

export default FooterLinks;
