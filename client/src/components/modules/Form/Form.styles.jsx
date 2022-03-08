import styled from 'styled-components';

export const Container = styled.div`
    padding: 1.25rem 1rem;
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.div`
    background-color: rgb(245, 0, 87);
    color: white;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
`;

export const HeaderText = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.1;
`;

export const TextField = styled.input`
    width: 18rem;
    border: 1px solid lightgray;
    border-radius: 0.2rem;
    font-size: 1.1rem;
    padding: 0.5rem;
`;

export const Error = styled.div`
    color: red;
`;

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.5rem 0;
`;

export const Button = styled.button`
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    width: 100%;
    border: none;
    border-radius: 0.2rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: white;
    background-color: #1565C0;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
`;