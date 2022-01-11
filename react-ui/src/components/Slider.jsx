import React from 'react';
import styled from 'styled-components';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'back' && '1rem'};
    right: ${props => props.direction === 'forward' && '1rem'};
    margin: auto;
`;

const Slider = () => {
    return (
        <Container>
            <Arrow direction="back">
                <ArrowBackIos />
            </Arrow>
            <Arrow direction="forward">
                <ArrowForwardIos />
            </Arrow>
        </Container>
    )
}

export default Slider;
