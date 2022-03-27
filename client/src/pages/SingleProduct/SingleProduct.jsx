import { MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
import { Announcements } from "../../components/elements";
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
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState({});

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

    return (
        <React.Fragment>
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
                        <Price>${product.price}</Price>
                        <SortContainer>
                            <ColorContainer>
                                <ColorText>Color :</ColorText>
                                <ColorInfo>
                                    {product.color?.map((c) => (
                                        <Color key={c} color={c} />
                                    ))}
                                </ColorInfo>
                            </ColorContainer>
                            <SizeContainer>
                                <SizeText>Size :</SizeText>
                                <SizeInfo>
                                    <Select>
                                        {product.size?.map((s) => (
                                            <Options key={s}>{s}</Options>
                                        ))}
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
};

export default SingleProduct;
