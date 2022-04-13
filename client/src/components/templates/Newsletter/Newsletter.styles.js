import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 50vh;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Input = styled.input`
  min-width: 30rem;
  border: 1px solid grey;
  border-radius: 2rem;
  padding: 0.5rem;
  font: inherit;
  padding-left: 1rem;
`;

export const Button = styled.button`
  position: absolute;
  right: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: black;
  border: none;
  border-radius: 2rem;
  min-width: 3rem;
  min-height: 2rem;
  display: grid;
  place-content: center;
  color: white;
  transition: all 0.3s ease;

  :hover {
    color: black;
    background-color: white;
    border: 1px solid grey;
  }
`;
