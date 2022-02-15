import * as React from 'react';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Description from '../Description/Description';
import { slideItems } from '../../data';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Container, Arrow, Wrapper, Slide, ImageContainer, Image, Info } from './Slider.styles';

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
                        <Slide key={item.id} >
                            <ImageContainer>
                                <Image src={item.img} />
                            </ImageContainer>
                            <Info>
                                <Header item={item} />
                                <Description item={item} />
                                <Button />
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
