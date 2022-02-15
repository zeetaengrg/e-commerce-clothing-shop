import * as React from 'react';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import SignInOutContainer from '../../modules/Form/SignInOutContainer/SignInOutContainer';
import { Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, MenuItem } from './Navbar.styles';

const Navbar = () => {
    return (
        <React.Fragment>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder="Search" />
                            <Search
                                style={{ fontSize: "1.2rem", color: "grey" }}
                            />
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Logo>Logo</Logo>
                    </Center>
                    <Right>
                        <SignInOutContainer />
                        <MenuItem>
                            <Badge color="primary" badgeContent={4}>
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </React.Fragment>
    );
};

export default Navbar;
