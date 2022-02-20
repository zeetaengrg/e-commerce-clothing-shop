import React from 'react';
import { Title } from './Header.styles';

const Header = ({item}) => {
    return (
        <React.Fragment>
            <Title>
                {item.title}
            </Title>    
        </React.Fragment>
    )
}

export default Header;
