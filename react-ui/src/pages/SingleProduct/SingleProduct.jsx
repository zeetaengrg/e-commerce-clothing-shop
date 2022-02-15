import { AddOutlined, RemoveOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Announcements from '../../components/Announcements/Announcements';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 1;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    position: relative;
`;

const Circle = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    z-index: 2;
`;

const Info = styled.div`
    flex: 1;
    background-color: #f5f5f5;
    padding: 1rem;
    margin: 1rem;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 400;
`;

const Description = styled.p`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    width: 85%;
`;

const Price = styled.span`
    font-size: 2.5rem;
    font-weight: 300;
`;

const SortContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
`;

const ColorContainer = styled.div`
    display: flex;
    margin-right: 1rem;
`;

const ColorText = styled.span`
    margin-right: 0.5rem;
`;

const ColorInfo = styled.div`
    display: flex;
`;

const Color = styled.div`
    margin-right: 0.5rem;
`;

const SizeContainer = styled.div`
    display: flex;
`;

const SizeText = styled.span`
    margin-right: 0.5rem;
`;

const SizeInfo = styled.div`

`;

const Select = styled.select`
    background: transparent;
    cursor: pointer;
    border: 1px solid teal;
    border-radius: 0.2rem;
`;

const Options = styled.option`
    padding: 0.2rem;
`;

const CartInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
`;

const CounterBtn = styled.div`
    margin-right: 1rem;
    display: flex;
    justify-content: center;
`;

const MinusBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    margin-right: 0.2rem;
`;

const Counter = styled.span`
    font-size: 1rem;
    border: 1px solid teal;
    padding: 0 0.5rem;
    margin-right: 0.2rem;
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AddBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
`;

const AddToCart = styled.button`
    padding: 0.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    background: transparent;
    border: 1px solid teal;
    border-radius: 0.2rem;
    cursor: pointer;

    &:hover {
        background: #e0e0e0;
    }
`;

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
                        <Image src='https://i.ibb.co/PFjnFB5/jacket4.png' />
                    </ImageContainer>
                    <Info>
                        <Title>H&M Bomber Jacket</Title>
                        <Divider style={{width: "100%"}}/>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eius repudiandae soluta quas provident aliquam nulla. Repellendus quos optio magni velit. Esse inventore dolor quos voluptates atque repellat porro et.
                        </Description>
                        <Price>$ 49.50</Price>
                        <SortContainer>
                            <ColorContainer>
                                <ColorText>Color :</ColorText>
                                <ColorInfo>
                                    <Color style={{width: "1rem", height: "1rem", borderRadius: "50%", backgroundColor: "red", border: "0.5px solid black"}} />
                                    <Color style={{width: "1rem", height: "1rem", borderRadius: "50%", backgroundColor: "blue", border: "0.5px solid black"}} />
                                    <Color style={{width: "1rem", height: "1rem", borderRadius: "50%", backgroundColor: "white", border: "0.5px solid black"}}/>
                                    <Color style={{width: "1rem", height: "1rem", borderRadius: "50%", backgroundColor: "black", border: "0.5px solid black"}}/>
                                    <Color style={{width: "1rem", height: "1rem", borderRadius: "50%", backgroundColor: "yellow", border: "0.5px solid black"}}/>
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
                                <MinusBtn onClick={handleClickMinus} ><RemoveOutlined /></MinusBtn>
                                <Counter>{count}</Counter>
                                <AddBtn onClick={handleClickAdd}><AddOutlined /></AddBtn>
                            </CounterBtn>
                            <AddToCart>Add to Cart</AddToCart>
                        </CartInfo>
                    </Info>
                </Wrapper>
                <Footer />
            </Container>
        </React.Fragment>
    )
}

export default SingleProduct;
