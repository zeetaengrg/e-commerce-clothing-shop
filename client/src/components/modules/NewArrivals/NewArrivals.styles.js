import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    height: 60vh;
    margin: 0.5rem;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;
