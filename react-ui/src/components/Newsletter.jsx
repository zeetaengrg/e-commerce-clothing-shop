import React from 'react';
import styled from 'styled-components';
import { Send } from '@mui/icons-material';

const Container = styled.div`
    display: grid;
    place-content: center;
    height: 50vh;
    background-color: #d3d3d3;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
`;

const Description = styled.p`
    text-align: center;
    margin-bottom: 1rem;
`;

const Form = styled.div`
    display: flex;
`;

const Input = styled.input`
    width: 30vw;
    border: 1px solid #707070;
    border-radius: 0.2rem;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding: 0.5rem;
    font: inherit;
`;

const Button = styled.button`
    cursor: pointer;
    background-color: teal;
    border: none;
    border-radius: 0.2rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 3rem;
    display: grid;
    place-content: center;
    :hover {
        color: white;
    }
`;

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
