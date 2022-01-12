import * as React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Description from './Description';
import Button from './Button';

const Container = styled.div`
    flex: 1;
    height: 60vh;
    margin: 0.5rem;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

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
