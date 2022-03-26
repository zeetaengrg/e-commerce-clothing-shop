import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`;

export const ImageContainer = styled.div`
    flex: 1;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    position: relative;
`;

export const Circle = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    ${mobile({ height: "350px", width: "350px" })};
`;

export const Image = styled.img`
    z-index: 2;
    ${mobile({ height: "400px" })};
`;

export const Info = styled.div`
    flex: 1;
    background-color: #f5f5f5;
    margin: 1rem;
    padding: 0.5rem 1rem;
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 400;
`;

export const Divider = styled.hr`
    width: 100%;
    opacity: 0.2;
`;

export const Description = styled.p`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    width: 85%;
`;

export const Price = styled.span`
    font-size: 2.5rem;
    font-weight: 300;
`;

export const SortContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
`;

export const ColorContainer = styled.div`
    display: flex;
    margin-right: 1rem;
`;

export const ColorText = styled.span`
    margin-right: 0.5rem;
`;

export const ColorInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const Color = styled.div`
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.2px solid grey;
    background-color: ${(props) => props.color};
    cursor: pointer;
`;

export const SizeContainer = styled.div`
    display: flex;
`;

export const SizeText = styled.span`
    margin-right: 0.5rem;
`;

export const SizeInfo = styled.div``;

export const Select = styled.select`
    background: transparent;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 0.2rem;
`;

export const Options = styled.option`
    padding: 0.2rem;
`;

export const CartInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    gap: 2rem;
`;

export const CounterBtn = styled.div`
    display: flex;
`;

export const MinusBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    margin-right: 0.2rem;
    display: grid;
    place-items: center;
`;

export const Counter = styled.span`
    font-size: 1rem;
    border: 1px solid black;
    padding: 0 0.5rem;
    margin-right: 0.2rem;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AddBtn = styled(MinusBtn)`
    margin-right: 0rem;
`;

export const AddToCart = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    background: transparent;
    border: 1px solid black;
    color: black;
    border-radius: 0.3rem;
    cursor: pointer;
    font-family: inherit;

    &:hover {
        background: black;
        color: white;
    }
`;
