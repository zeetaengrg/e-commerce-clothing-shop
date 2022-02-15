import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    height: 70vh;
    margin: 0.5rem;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #f5f5f5;
`;

export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;