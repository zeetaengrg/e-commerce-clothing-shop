import * as React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import SignInOutContainer from '../container/SignInOutContainer';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 50px;
`;

const Wrapper = styled.div`
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    display: flex;
    flex: 1;
    gap: 1rem;
`;

const Language = styled.div`
    font-size: 1rem;
    cursor: pointer;
    align-items: center;
    display: flex;
    ${mobile({ display: 'none' })};
`;

const SearchContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    ${mobile({ marginLeft: 0 })};
`;

const Input = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font-size: 1rem;
    padding-left: 0.2rem;
    ${mobile({ width: '50px' })};
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    text-transform: uppercase;
    align-items: center;
    /* ${mobile({ flex: '2' })}; */
`;

const MenuItem = styled.div`
    font-size: 1rem;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <React.Fragment>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder="Search" />
                            <Search style={{fontSize:"1.2rem", color:"grey"}} />
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Logo>Logo</Logo>
                    </Center>
                    <Right>
                        <SignInOutContainer />
                        <MenuItem>
                            <Badge color="primary" badgeContent={4} >
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </React.Fragment>
    )
};

export default Navbar;
