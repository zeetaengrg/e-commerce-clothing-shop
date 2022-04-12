import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  width: 90vw;
  border-radius: 3rem;
  background-color: #f5f5f5;
`;

export const LeftContainer = styled.section`
  max-width: 50%;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 4rem;
`;

export const TopContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Text = styled.p`
  color: grey;
`;

export const Link = styled.a`
  color: teal;
`;

export const HeaderContent = styled.div``;

export const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.3rem;
`;

export const SubHeader = styled(Text)``;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -1rem;
  gap: 1rem;
`;

export const Error = styled.div`
  color: red;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmailLabel = styled.label`
  font-weight: 600;
`;

export const EmailInput = styled.input`
  width: 20rem;
  height: 2rem;
  font-size: 0.9rem;
  border: none;
  border-bottom: 1px solid grey;
  background-color: transparent;
  outline: none;
  color: grey;
`;

export const ConfirmPassword = styled(Email)``;

export const ConfirmPasswordLabel = styled(EmailLabel)``;

export const ConfirmPasswordInput = styled(EmailInput)``;

export const Password = styled(Email)``;

export const PasswordLabel = styled(EmailLabel)``;

export const PasswordInput = styled(EmailInput)``;

export const Terms = styled.div`
  display: flex;
  align-items: center;
`;

export const TermsInput = styled.input`
  margin-right: 0.5rem;
`;

export const TermsLabel = styled.p``;

export const Button = styled.button`
  max-width: 12rem;
  padding: 0.5rem 1rem;
  border: 1px solid grey;
  border-radius: 3rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: #f5f5f5;
    border: 1px solid black;
  }
`;

export const RightContainer = styled.section`
  max-width: 50%;
  /* flex: 1; */
  background-color: black;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  color: #f5f5f5;
  font-size: 5rem;
  font-weight: 600;
`;
