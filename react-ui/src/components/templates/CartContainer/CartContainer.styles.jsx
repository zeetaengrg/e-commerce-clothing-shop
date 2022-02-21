import styled from 'styled-components';
import { mobile } from '../../../responsive';

export const Container = styled.div`
    margin: 1rem;
    ${mobile({ margin: '0.5rem' })};
`;

export const Title = styled.h1`
    text-transform: uppercase;
    font-size: 2rem;
    font-family: inherit;
    font-weight: 500;
    text-align: center;
    ${mobile({ fontSize: '1.5rem' })};
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    gap: 1rem;
    ${mobile({ margin: '0.5rem' })};
`;

export const Button = styled.button`
    cursor: pointer;
    text-transform: uppercase;
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        color: black;
    }

    ${mobile({ fontSize: '0.7rem', padding: '0.3rem' })};
`;

export const ShoppingInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const ShoppingInfoItem = styled.span`
    text-decoration: underline;
`;

export const Wrapper = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })};
`;

export const CartInfo = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
`;

export const CartInfoContainer = styled.div`

`;

export const CartDetails = styled.div`
    display: flex;
    flex: 3;
    margin: 1rem 0;
    gap: 1.5rem;
`;

export const Divider = styled.hr`
    width: 100%;
    opacity: 0.2;
`;

export const Image = styled.img`
    height: 150px;
    object-fit: contain;
    flex: 1;
`;

export const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    height: 20vh;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex: 1;
    gap: 1rem;
    flex-direction: column;
`;

export const Name = styled.span`

`;

export const NumberId = styled.span`

`;

export const Color = styled.div`
    border: 0.5px solid black;
    border-radius: 50%;
    background-color: blue;
    height: 1rem;
    width: 1rem;
`;

export const Size = styled.span`

`;

export const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CounterBtn = styled.div`
    display: flex;
    align-items: center;
`;

export const MinusBtn = styled.span`
    cursor: pointer;
`;

export const Counter = styled.span`
    border: 0.5px solid black;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
`;

export const AddBtn = styled.span`
    cursor: pointer;
`;

export const Price = styled.span`
    font-size: 1.8rem;
`;

export const CartSummary = styled.div`
    flex: 1;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    text-align: center;
    height: 43vh;
`;

export const OrderTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

export const CostDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
`;

export const SubTotalCost = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SubTotal = styled.span`

`;

export const SubTotalPrice = styled.span`

`;

export const ShippingCost = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Shipping = styled.span`

`;

export const ShippingPrice = styled.span`

`;

export const ShippingDiscount = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0rem;
`;

export const Discount = styled.span`

`;

export const DiscountPrice = styled.span`

`;

export const TotalCost = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 500;
`;

export const Total = styled.span`

`;

export const TotalPrice = styled.span`

`;