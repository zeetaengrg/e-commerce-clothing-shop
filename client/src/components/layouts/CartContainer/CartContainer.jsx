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

const KEY = process.env.REACT_APP_STRIPE_KEY;

const CartContainer = () => {
  const [count, setCount] = useState(1);
  const cart = useSelector((state) => state.cart);
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
              {cart.products.map((product) => (
                <CartDetails key={product._id}>
                  <Image src={product.img} />
                  <ProductDetails>
                    <ProductInfo>
                      <Name>
                        <b>Product: </b>
                        {product.title}
                      </Name>
                      <NumberId>
                        <b>ID: </b>
                        {product._id}
                      </NumberId>
                      <ColorTitle>
                        <b>Color: </b>
                        <Color color={product.color} />
                      </ColorTitle>
                      <Size>
                        <b>Size: </b>
                        {product.size}
                      </Size>
                    </ProductInfo>
                    <PriceDetails>
                      <CounterBtn>
                        <MinusBtn onClick={handleClickMinus}>
                          <MdRemoveCircleOutline />
                        </MinusBtn>
                        <Counter>{product.count}</Counter>
                        <AddBtn onClick={handleClickAdd}>
                          <MdAddCircleOutline />
                        </AddBtn>
                      </CounterBtn>
                      <Price>${product.price * product.count}</Price>
                    </PriceDetails>
                  </ProductDetails>
                </CartDetails>
              ))}
              <Divider />
            </CartInfoContainer>
          </CartInfo>
          <CartSummary>
            <OrderTitle>Order Summary</OrderTitle>
            <Divider />
            <CostDetails>
              <SubTotalCost>
                <SubTotal>Subtotal</SubTotal>
                <SubTotalPrice>${cart.total}</SubTotalPrice>
              </SubTotalCost>
              <ShippingCost>
                <Shipping>Estimated Shipping</Shipping>
                <ShippingPrice>${shippingCost}</ShippingPrice>
              </ShippingCost>
              <ShippingDiscount>
                <Discount>Discount</Discount>
                <DiscountPrice>- ${discount}</DiscountPrice>
              </ShippingDiscount>
              <Divider />
              <TotalCost>
                <Total>Total</Total>
                <TotalPrice>
                  ${cart.total - (shippingCost - discount)}
                </TotalPrice>
              </TotalCost>
              <StripeCheckout
                name="Alpha Male"
                image="https://i.ibb.co/wwxwXPC/logo.png"
                billingAddress
                shippingAddress
                description={`Your total is ${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <CheckoutBtn>Checkout Now</CheckoutBtn>
              </StripeCheckout>
            </CostDetails>
          </CartSummary>
        </Wrapper>
      </Container>
    </>
  );
};

export default CartContainer;
