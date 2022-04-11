import { LeftContainer, RightContainer } from "./SignInStyles";
import {
  Container,
  Wrapper,
  FormContent,
  Header,
  HeaderContent,
  Password,
  PasswordInput,
  PasswordLabel,
  SubHeader,
  Text,
  TopContent,
  Username,
  UsernameInput,
  UsernameLabel,
  Button,
  Link,
  Title,
} from "../SignUp/SignUpStyles";

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <RightContainer>
          <Title>Enjoy The Best Shopping Experience</Title>
        </RightContainer>
        <LeftContainer>
          <TopContent>
            <Text>Create an Account?</Text>
            <Link href="/register">Sign Up</Link>
          </TopContent>
          <HeaderContent>
            <Header>Sign In</Header>
            <SubHeader>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              cupiditate odio accusamus dolor aut iusto architecto aperiam.
            </SubHeader>
          </HeaderContent>
          <FormContent>
            <Username>
              <UsernameLabel htmlFor="username">USERNAME</UsernameLabel>
              <UsernameInput
                name="username"
                type="text"
                placeholder="Enter Your Username"
              />
            </Username>
            <Password>
              <PasswordLabel htmlFor="password">PASSWORD</PasswordLabel>
              <PasswordInput
                name="password"
                type="password"
                placeholder="Enter Your Password"
              />
            </Password>
          </FormContent>
          <Button>Sign In</Button>
        </LeftContainer>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
