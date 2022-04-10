import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";
import { addProduct } from "../../redux/cartRedux";
import { publicRequest } from "../../requestMethod";
import { Announcements, Ratings } from "../../components/elements";
import { Navbar, Footer } from "../../components/templates";
import {
  Container,
  Wrapper,
  ImageContainer,
  Circle,
  Image,
  Info,
  Title,
  Divider,
  Description,
  Price,
  Stock,
  SortContainer,
  ColorContainer,
  ColorText,
  ColorInfo,
  Color,
  SizeContainer,
  SizeText,
  Select,
  Options,
  CartInfo,
  CounterBtn,
  MinusBtn,
  Counter,
  AddBtn,
  AddToCart,
  StockTitle,
  ReviewContainer,
  TotalReviews,
} from "./SingleProduct.styles";

const SingleProduct = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  // const [isSelected, setIsSelected] = useState(false);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  });

  const handleClickMinus = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  const handleClickAdd = () => {
    setCount(count + 1);
  };

  const handleClickAddToCart = () => {
    dispatch(addProduct({ ...product, count, color, size }));
  };

  // const handleColor = () => {
  //   setColor();
  //   setIsSelected(!isSelected);
  // };

  return (
    <>
      <Container>
        <Announcements />
        <Navbar />
        <Wrapper>
          <ImageContainer>
            <Circle />
            <Image src={product.img} />
          </ImageContainer>
          <Info>
            <Title>{product.title}</Title>
            <Divider />
            <Description>{product.description}</Description>
            <ReviewContainer>
              <Ratings rating={product.ratings} />
              <TotalReviews>{`(${product.reviews} Reviews)`}</TotalReviews>
            </ReviewContainer>
            <Price>${product.price}</Price>
            <Stock>
              <StockTitle>Available: </StockTitle>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Stock>
            <SortContainer>
              <ColorContainer>
                <ColorText>Color: </ColorText>
                <ColorInfo>
                  {product.color?.map((c) => (
                    <Color
                      key={c}
                      color={c}
                      onClick={() => setColor(c)}
                      // isSelected={isSelected}
                      // onClick={() => setIsSelected(!isSelected)}
                      // onClick={handleColor}
                    />
                  ))}
                </ColorInfo>
              </ColorContainer>
              <SizeContainer>
                <SizeText>Size: </SizeText>
                <Select
                  onChange={(e) => setSize(e.target.value)}
                  defaultValue="Size"
                >
                  <Options disabled value="Size">
                    Size
                  </Options>
                  {product.size?.map((s) => (
                    <Options key={s}>{s}</Options>
                  ))}
                </Select>
              </SizeContainer>
            </SortContainer>
            <CartInfo>
              <CounterBtn>
                <MinusBtn onClick={handleClickMinus}>
                  <MdRemoveCircleOutline />
                </MinusBtn>
                <Counter>{count}</Counter>
                <AddBtn onClick={handleClickAdd}>
                  <MdAddCircleOutline />
                </AddBtn>
              </CounterBtn>
              <AddToCart onClick={handleClickAddToCart}>Add to Cart</AddToCart>
            </CartInfo>
          </Info>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default SingleProduct;
