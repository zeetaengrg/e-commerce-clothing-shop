import React from 'react';
import { LocationOn, LocalPhone, MailOutline } from '@mui/icons-material';
import { Container, Title, Location, PhoneNumber, Email, CreditCards, Image } from './FooterContact.styles';

const FooterContact = () => {
    return (
        <React.Fragment>
            <Container>
                <Title>Contact</Title>
                <Location>
                    <LocationOn style={{marginRight: "1rem"}} />
                    821 Central Park, New York, NY 10019
                </Location>
                <PhoneNumber>
                    <LocalPhone style={{marginRight: "1rem"}} />
                    +1 (212) 555-0123
                </PhoneNumber>
                <Email>
                    <MailOutline style={{marginRight: "1rem"}} />
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
