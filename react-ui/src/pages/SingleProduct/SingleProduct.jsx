import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';
import { Divider } from '@mui/material';
import React from 'react';
import { Announcements } from '../../components/elements';
import { Navbar, Footer } from '../../components/layouts';
import {
    Container,
    Wrapper,
    ImageContainer,
    Circle,
    Image,
    Info,
    Title,
    Description,
    Price,
    SortContainer,
    ColorContainer,
    ColorText,
    ColorInfo,
    Color,
    SizeContainer,
    SizeText,
    SizeInfo,
    Select,
    Options,
    CartInfo,
    CounterBtn,
    MinusBtn,
    Counter,
    AddBtn,
    AddToCart,
} from "./SingleProduct.styles";

const SingleProduct = () => {
    const [count, setCount] = React.useState(1);

    const handleClickMinus = () => {
        if (count === 1) {
            return;
        } 
        setCount(count - 1);
    };

    const handleClickAdd = () => {
        setCount(count + 1);
    };

    return (
        <React.Fragment>
            <Container>
                <Announcements />
                <Navbar />
                <Wrapper>
                    <ImageContainer>
                        <Circle />
                        <Image src="https://i.ibb.co/PFjnFB5/jacket4.png" />
                    </ImageContainer>
                    <Info>
                        <Title>H&M Bomber Jacket</Title>
                        <Divider style={{ width: "100%" }} />
                        <Description>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque, eius repudiandae soluta quas provident
                            aliquam nulla. Repellendus quos optio magni velit.
                            Esse inventore dolor quos voluptates atque repellat
                            porro et.
                        </Description>
                        <Price>$ 49.50</Price>
                        <SortContainer>
                            <ColorContainer>
                                <ColorText>Color :</ColorText>
                                <ColorInfo>
                                    <Color
                                        style={{
                                            backgroundColor: "red",
                                        }}
                                    />
                                    <Color
                                        style={{
                                            backgroundColor: "blue",
                                        }}
                                    />
                                    <Color
                                        style={{
                                            backgroundColor: "white",
                                        }}
                                    />
                                    <Color
                                        style={{
                                            backgroundColor: "black",
                                        }}
                                    />
                                    <Color
                                        style={{
                                            backgroundColor: "yellow",
                                        }}
                                    />
                                </ColorInfo>
                            </ColorContainer>
                            <SizeContainer>
                                <SizeText>Size :</SizeText>
                                <SizeInfo>
                                    <Select>
                                        <Options>XS</Options>
                                        <Options>S</Options>
                                        <Options>M</Options>
                                        <Options>L</Options>
                                        <Options>XL</Options>
                                    </Select>
                                </SizeInfo>
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
                            <AddToCart>Add to Cart</AddToCart>
                        </CartInfo>
                    </Info>
                </Wrapper>
                <Footer />
            </Container>
        </React.Fragment>
    );
}

export default SingleProduct;
