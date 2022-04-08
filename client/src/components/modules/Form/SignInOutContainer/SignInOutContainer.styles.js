import styled from "styled-components";

export const BoxOne = styled.div``;

export const Text = styled.p``;

export const Btn = styled.button`
  color: black;
  font-family: inherit;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 0.2rem;
  border: 1px solid black;
  padding: 0.2rem 0.5rem;
  background-color: white;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: black;
    color: white;
  }
`;

export const ModalDiv = styled.div`
  transition: all 0.3s ease-in-out;
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  text-transform: none;
`;

export const PaperContainer = styled.div`
  width: 340;
  margin: 20px auto;
  background-color: antiquewhite;
  border-radius: 0.3rem;
`;

export const TabBtn = styled.div`
  background-color: white;
  border: none;
  outline: none;
  padding: 0.8rem 1rem;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  border-radius: 0.3rem 0.3rem 0 0;
  display: flex;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const TabOne = styled.div`
  flex: 1;
  text-align: center;
`;

export const TabTwo = styled.div`
  flex: 1;
  text-align: center;
`;
