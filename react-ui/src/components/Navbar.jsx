import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from '@mui/icons-material';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div``

const Language = styled.div`
    font-size: 1rem;
    cursor: pointer;
`;

const SearchContainer = styled.div``;

const Center = styled.div``
const Right = styled.div``


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <input type="text" />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center>Center</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
};

export default Navbar;
