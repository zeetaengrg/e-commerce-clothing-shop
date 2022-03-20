import styled from 'styled-components';

export const Info = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;    
    transition: all 0.5s ease;
    cursor: pointer;
    z-index: 3;
`;

export const Container = styled.div`
    flex: 1;
    min-width: 300px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    background-color: #f5fdfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`;

export const Circle = styled.div`
    background-color: white;
    width: 250px;
    height: 250px;
    border: none;
    border-radius: 50%;
    position: absolute;
`;

export const Image = styled.img`
    height: 75%;
    object-fit: cover;
    z-index: 2;
`;

export const Icons = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;