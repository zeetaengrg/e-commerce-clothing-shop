import React from 'react';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import { RemoveOutlined, AddOutlined } from '@mui/icons-material';

const Container = styled.div`
    margin: 1rem;
`;

const Title = styled.h1`
    text-transform: uppercase;
    font-size: 2rem;
    font-family: inherit;
    font-weight: 500;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
`;

const Button = styled.button`
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
`;

const ShoppingInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const ShoppingInfoItem = styled.span`
    text-decoration: underline;
`;

const Wrapper = styled.div`
    display: flex;
`;

const CartInfo = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
`;

const CartInfoContainer = styled.div`

`;

const CartDetails = styled.div`
    display: flex;
    flex: 3;
    margin: 1rem 0;
    gap: 1.5rem;
`;

const Image = styled.img`
    height: 150px;
    object-fit: contain;
    flex: 1;
`;

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    height: 20vh;
`;

const ProductInfo = styled.div`
    display: flex;
    flex: 1;
    gap: 1rem;
    flex-direction: column;
`;

const Name = styled.span`

`;

const NumberId = styled.span`

`;

const Color = styled.div`
    border: 0.5px solid black;
    border-radius: 50%;
    background-color: blue;
    height: 1rem;
    width: 1rem;
`;

const Size = styled.span`

`;

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CounterBtn = styled.div`
    display: flex;
    align-items: center;
`;

const MinusBtn = styled.span`
    cursor: pointer;
`;

const Counter = styled.span`
    border: 0.5px solid black;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
`;

const AddBtn = styled.span`
    cursor: pointer;
`;

const Price = styled.span`
    font-size: 1.8rem;
`;

const CartSummary = styled.div`
    flex: 1;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    text-align: center;
    height: 43vh;
`;

const OrderTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

const CostDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
`;

const SubTotalCost = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SubTotal = styled.span`

`;

const SubTotalPrice = styled.span`

`;

const ShippingCost = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Shipping = styled.span`

`;

const ShippingPrice = styled.span`

`;

const ShippingDiscount = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Discount = styled.span`

`;

const DiscountPrice = styled.span`

`;

const TotalCost = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 500;
`;

const Total = styled.span`

`;

const TotalPrice = styled.span`

`;

const CartContainer = () => {
    const[count, setCount] = React.useState(1);
    const handleClickMinus = () => {
        if (count === 1) {
            return;
        } 
        setCount(count - 1);
    };
    const handleClickAdd = () => setCount(count + 1);

    return (
        <React.Fragment>
            <Container>
                <Title>Your Shopping Cart</Title>
                <ButtonContainer>
                    <Button>Continue Shopping</Button>
                    <ShoppingInfo>
                        <ShoppingInfoItem>
                            Shopping Bag(2)
                        </ShoppingInfoItem>
                        <ShoppingInfoItem>
                            Your Wishlist(0)
                        </ShoppingInfoItem>
                    </ShoppingInfo>
                    <Button>Checkout</Button>
                </ButtonContainer>
                <Wrapper>
                    <CartInfo>
                        <CartInfoContainer>
                            <CartDetails>
                                <Image src="https://i.ibb.co/rwKCtct/suit1.png" />
                                <ProductDetails>
                                    <ProductInfo>
                                        <Name><b>Product: </b>ZARA SUIT</Name>
                                        <NumberId><b>ID: </b>46851266</NumberId>
                                        <Color />
                                        <Size><b>Size: </b>M</Size>
                                    </ProductInfo>
                                    <PriceDetails>
                                        <CounterBtn>
                                            <MinusBtn onClick={handleClickMinus} ><RemoveOutlined /></MinusBtn>
                                            <Counter>{count}</Counter>
                                            <AddBtn onClick={handleClickAdd}><AddOutlined /></AddBtn> 
                                        </CounterBtn>
                                        <Price>
                                            $ 75.50
                                        </Price>
                                    </PriceDetails>
                                </ProductDetails>
                            </CartDetails>
                            <Divider />
                            <CartDetails>
                                Product no 2
                            </CartDetails>
                        </CartInfoContainer>
                    </CartInfo>
                    <CartSummary>
                        <OrderTitle>Order Summary</OrderTitle>
                        <Divider />
                        <CostDetails>
                            <SubTotalCost>
                                <SubTotal>Subtotal</SubTotal>
                                <SubTotalPrice>$ 175.00</SubTotalPrice>
                            </SubTotalCost>
                            <ShippingCost>
                                <Shipping>Estimated Shipping</Shipping>
                                <ShippingPrice>$ 5.50</ShippingPrice>
                            </ShippingCost>
                            <ShippingDiscount>
                                <Discount>Shipping Discount</Discount>
                                <DiscountPrice>- $ 5.50</DiscountPrice>
                            </ShippingDiscount>
                            <Divider />
                            <TotalCost>
                                <Total>Total</Total>
                                <TotalPrice>$ 175.00</TotalPrice>
                            </TotalCost>
                            <Button>Checkout Now</Button>
                        </CostDetails>
                    </CartSummary>
                </Wrapper>
            </Container>
        </React.Fragment>
    )
}

export default CartContainer;
