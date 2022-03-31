import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem;
`;

export const Icons = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  z-index: 3;
  border-radius: 1rem;
`;

export const CardBody = styled.section`
  flex: 1;
  min-width: 300px;
  height: 350px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fdfd;
  position: relative;

  &:hover ${Icons} {
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
  height: 300px;
  width: 250px;
  object-fit: cover;
  z-index: 2;
  padding: 1.5rem;
`;

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export const CardInfo = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.1rem;
`;

export const Price = styled.span`
  font-size: 1.1rem;
`;
