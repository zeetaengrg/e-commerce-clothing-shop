import React from 'react';
import { Send } from '@mui/icons-material';
import { Container, Title, Description, Form, Input, Button } from './Newsletter.styles';

const Newsletter = () => {
    return (
        <React.Fragment>
            <Container>
                <Title>Newsletter</Title>
                <Description>Get timely updates from your favorite products.</Description>
                <Form>
                    <Input type="text" placeholder="Enter Your Email" />
                    <Button>
                        <Send />
                    </Button>
                </Form>
            </Container>
        </React.Fragment>
    )
}

export default Newsletter;