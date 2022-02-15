import * as React from 'react';
import Header from '../../elements/Header/Header';
import Description from '../../elements/Description/Description';
import Button from '../../elements/Button/Button';
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
