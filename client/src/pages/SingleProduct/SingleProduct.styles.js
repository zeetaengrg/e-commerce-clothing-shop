import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem 1rem;
  background-color: #f5f5f5;
  position: relative;
  height: 550px;
  border-radius: 0.5rem;
`;

export const Circle = styled.div`
  height: 450px;
  width: 450px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  ${mobile({ height: "350px", width: "350px" })};
`;

export const Image = styled.img`
  z-index: 2;
  height: 85%;
  ${mobile({ height: "400px" })};
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f5f5f5;
  margin: 0rem 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
`;

export const Divider = styled.hr`
  width: 100%;
  opacity: 0.2;
`;

export const Description = styled.p`
  width: 85%;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const ReviewContainer = styled.div``;

export const TotalReviews = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
`;

export const Price = styled.span`
  font-size: 2rem;
  font-weight: 300;
`;

export const Stock = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

export const StockTitle = styled(TotalReviews)``;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ColorContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ColorText = styled(StockTitle)``;

export const ColorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Color = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 0.2px solid grey;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.isSelected &&
    `
    border: 0.2px solid black;
    opacity: 0.7;

    &:after {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}

  &:hover {
    border: 2px solid black;
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SizeText = styled(StockTitle)``;

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
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const CounterBtn = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  width: 10rem;
`;

export const MinusBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: grid;
  place-items: center;
`;

export const Counter = styled.span`
  font-size: 1.2rem;
  border: 1px solid black;
  padding: 0 1rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddBtn = styled(MinusBtn)``;

export const AddToCart = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  width: 10rem;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid black;
  color: black;
  border-radius: 0.3rem;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: black;
    color: white;
  }
`;
