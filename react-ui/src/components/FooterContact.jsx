import React from 'react';
import styled from 'styled-components';
import { LocationOn, LocalPhone, MailOutline } from '@mui/icons-material';

const Container = styled.div`
    flex: 1;
`;

const Title = styled.h3`

`;

const Location = styled.div`

`;

const PhoneNumber = styled.div`

`;

const Email = styled.div`

`;

const CreditCards = styled.div`
    display: flex;
`;

const Image = styled.img`
    height: 1.5rem;
    width: 3rem;
    object-fit: contain;
`;

const FooterContact = () => {
    return (
        <React.Fragment>
            <Container>
                <Title>Contact</Title>
                <Location>
                    <LocationOn />
                    821 Central Park, New York, NY 10019
                </Location>
                <PhoneNumber>
                    <LocalPhone />
                    +1 (212) 555-0123
                </PhoneNumber>
                <Email>
                    <MailOutline />
                    contact@contact.com
                </Email>
                <CreditCards>
                    <Image src="https://i.ibb.co/M2Q4KXk/visa.png" />
                    <Image src="https://i.ibb.co/2Y4sPXN/mastercard.png" />
                    <Image src="https://i.ibb.co/xX0P3J3/americanexpress.png" />
                    <Image src="https://i.ibb.co/xJK5vV9/paypal.png" />
                </CreditCards>
            </Container>

        </React.Fragment>
    )
}

export default FooterContact;
