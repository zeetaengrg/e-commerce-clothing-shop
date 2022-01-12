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
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    height: 100vh;
    width: 100vw;
`;

const Button = styled.div`
    height: 1.5rem;
    width: 5rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem;
    position: absolute;
    z-index: 2;
    bottom: 1rem;
    margin: 0 50vw;
    cursor: pointer;
    :hover {
        color: #707070;
        border-color: #707070;
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
                            <Button>SHOP NOW</Button>
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
