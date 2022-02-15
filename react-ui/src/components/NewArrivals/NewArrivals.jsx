import * as React from 'react';
import Header from '../Header/Header';
import Description from '../Description/Description';
import Button from '../Button/Button';
import { Container, Image, Info } from './NewArrivals.styles';

const NewArrivals = ({item}) => {
    return (
        <React.Fragment>
            <Container>
                <Image src={item.img}/>
                <Info>
                    <Header item={item} />
                    <Description item={item}/>
                    <Button />
                </Info>
            </Container>
        </React.Fragment>
    )
}

export default NewArrivals;
