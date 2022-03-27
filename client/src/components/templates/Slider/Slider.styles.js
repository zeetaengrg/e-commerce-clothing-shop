import styled from 'styled-components';
import { mobile } from '../../../responsive';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ height: "50vh" })};
`;

export const Arrow = styled.div`
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

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.currentSlide * -100}vw);
    transition: all 1.5s ease;
`;

export const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    ${mobile({ height: "50vh" })};
`;

export const ImageContainer = styled.div`

`;

export const Image = styled.img`
    height: 100vh;
    width: 100vw;
    ${mobile({ height: "50vh" })};
`;

export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ height: "80%" })}
`;