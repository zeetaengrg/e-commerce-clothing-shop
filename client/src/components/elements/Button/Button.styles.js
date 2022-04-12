import styled from "styled-components";

export const Btn = styled.button`
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border: unset;
  border-radius: 2rem;
  color: black;
  z-index: 1;
  background: #f5f5f5;
  opacity: 0.8;
  position: relative;
  font-weight: 600;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 2rem;
    border: none;
    background-color: black;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }

  :hover {
    color: #f5f5f5;
  }

  :hover::before {
    width: 100%;
  }
`;
