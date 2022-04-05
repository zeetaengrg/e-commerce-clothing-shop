import { useState } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";
import {
  Container,
  Title,
  ButtonContainer,
  Button,
  ShoppingInfo,
  ShoppingInfoItem,
  Wrapper,
  CartInfo,
  CartInfoContainer,
  CartDetails,
  Divider,
  Image,
  ProductDetails,
  ProductInfo,
  Name,
  NumberId,
  ColorTitle,
  Color,
  Size,
  PriceDetails,
  CounterBtn,
  MinusBtn,
  Counter,
  AddBtn,
  Price,
  CartSummary,
  OrderTitle,
  CostDetails,
  SubTotalCost,
  SubTotal,
  SubTotalPrice,
  ShippingCost,
  Shipping,
  ShippingPrice,
  ShippingDiscount,
  Discount,
  DiscountPrice,
  TotalCost,
  Total,
  TotalPrice,
  CheckoutBtn,
} from "./CartContainer.styles";

const KEY = process.env.STRIPE_KEY;

const CartContainer = () => {
  const [count, setCount] = useState(1);
  const cart = useSelector((state) => state.cart);
  const totalCount = useSelector((state) => state.cart.products.count);
  const quantity = cart.quantity;
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);

  const handleClickMinus = () => {
    setCount(count - 1);
  };
  const handleClickAdd = () => {
    setCount(count + 1);
  };

  let shippingCost = 5.99;
  let discount = 5.99;

  return (
    <>
      <Container>
        <Title>Your Shopping Cart</Title>
        <ButtonContainer>
          <Button>Continue Shopping</Button>
          <ShoppingInfo>
            <ShoppingInfoItem>Shopping Bag({quantity})</ShoppingInfoItem>
            <ShoppingInfoItem>Your Wishlist(0)</ShoppingInfoItem>
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
                    <Name>
                      <b>Product: </b>ZARA SUIT
                    </Name>
                    <NumberId>
                      <b>ID: </b>46851266
                    </NumberId>
                    <Color />
                    <Size>
                      <b>Size: </b>M
                    </Size>
                  </ProductInfo>
                  <PriceDetails>
                    <CounterBtn>
                      <MinusBtn onClick={handleClickMinus}>
                        <MdRemoveCircleOutline />
                      </MinusBtn>
                      <Counter>{count}</Counter>
                      <AddBtn onClick={handleClickAdd}>
                        <MdAddCircleOutline />
                      </AddBtn>
                    </CounterBtn>
                    <Price>$ 125.50</Price>
                  </PriceDetails>
                </ProductDetails>
              </CartDetails>
              <Divider />
              <CartDetails>
                <Image src="https://i.ibb.co/PFjnFB5/jacket4.png" />
                <ProductDetails>
                  <ProductInfo>
                    <Name>
                      <b>Product: </b>H&M T-Shirt
                    </Name>
                    <NumberId>
                      <b>ID: </b>87546351
                    </NumberId>
                    <Color style={{ backgroundColor: "black" }} />
                    <Size>
                      <b>Size: </b>L
                    </Size>
                  </ProductInfo>
                  <PriceDetails>
                    <CounterBtn>
                      <MinusBtn onClick={handleClickMinus}>
                        <MdRemoveCircleOutline />
                      </MinusBtn>
                      <Counter>{count}</Counter>
                      <AddBtn onClick={handleClickAdd}>
                        <MdAddCircleOutline />
                      </AddBtn>
                    </CounterBtn>
                    <Price>$ 24.50</Price>
                  </PriceDetails>
                </ProductDetails>
              </CartDetails>
              <Divider />
              <CartDetails>
                <Image src="https://i.ibb.co/k0WQyFN/jeans2.png" />
                <ProductDetails>
                  <ProductInfo>
                    <Name>
                      <b>Product: </b>Levis Jeans Pant
                    </Name>
                    <NumberId>
                      <b>ID: </b>71843595
                    </NumberId>
                    <Color
                      style={{
                        backgroundColor: "lightblue",
                      }}
                    />
                    <Size>
                      <b>Size: </b>M
                    </Size>
                  </ProductInfo>
                  <PriceDetails>
                    <CounterBtn>
                      <MinusBtn onClick={handleClickMinus}>
                        <MdRemoveCircleOutline />
                      </MinusBtn>
                      <Counter>{count}</Counter>
                      <AddBtn onClick={handleClickAdd}>
                        <MdAddCircleOutline />
                      </AddBtn>
                    </CounterBtn>
                    <Price>$ 32.50</Price>
                  </PriceDetails>
                </ProductDetails>
              </CartDetails>
            </CartInfoContainer>
          </CartInfo>
          <CartSummary>
            <OrderTitle>Order Summary</OrderTitle>
            <Divider />
            <CostDetails>
              <SubTotalCost>
                <SubTotal>Subtotal</SubTotal>
                <SubTotalPrice>$ 182.50</SubTotalPrice>
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
                <TotalPrice>$ 182.50</TotalPrice>
              </TotalCost>
              <Button>Checkout Now</Button>
            </CostDetails>
          </CartSummary>
        </Wrapper>
      </Container>
    </React.Fragment>
  );
};

export default CartContainer;
