import * as React from 'react';
import { MdSearch, MdOutlineShoppingCart } from 'react-icons/md';
import SignInOutContainer from '../../modules/Form/SignInOutContainer/SignInOutContainer';
import { Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right } from './Navbar.styles';

const Navbar = () => {
    return (
        <React.Fragment>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder="Search" />
                            <MdSearch
                                style={{ fontSize: "1.2rem", color: "grey" }}
                            />
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Logo>Logo</Logo>
                    </Center>
                    <Right>
                        <SignInOutContainer />
                        <MdOutlineShoppingCart style={{ fontSize: "1.5rem", cursor: "pointer" }} />
                    </Right>
                </Wrapper>
            </Container>
        </React.Fragment>
    );
};

export default Navbar;
