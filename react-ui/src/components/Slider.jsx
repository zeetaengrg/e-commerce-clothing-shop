import * as React from 'react';
import styled from 'styled-components';
import { slideItems } from '../data';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    position: relative;
    overflow: hidden;
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
    left: ${props => props.direction === 'left' && '1rem'};
    right: ${props => props.direction === 'right' && '1rem'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    :hover {
        opacity: 0.2;
    }
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.currentSlide * -100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
`;

const ImageContainer = styled.div`
    /* flex: 1; */
`;

const Image = styled.img`
    height: 100vh;
    width: 100vw;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    background-color: #fff;
`;

const Description = styled.p`
    background-color: #fff;
`;

const Button = styled.button`
    background-color: transparent;
    height: 2.5rem;
    width: 6rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-top: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    :hover {
        color: teal;
        border-color: teal;
    }
`;


const Slider = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1: slideItems.length - 1);
        } else {
            setCurrentSlide(currentSlide < slideItems.length -1 ? currentSlide + 1: 0);
        }
    };

    return (
        <React.Fragment>
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeft />
                </Arrow>
                <Wrapper currentSlide={currentSlide}>
                    {slideItems.map(item => (
                        <Slide>
                            <ImageContainer>
                                <Image src={item.img} />
                            </ImageContainer>
                            <Info>
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                                <Button>SHOP NOW</Button>
                            </Info>
                        </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRight />
                </Arrow>
            </Container>
        </React.Fragment>
    )
}

export default Slider;
