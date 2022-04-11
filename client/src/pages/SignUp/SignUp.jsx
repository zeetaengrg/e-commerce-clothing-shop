import {
  Container,
  Wrapper,
  LeftContainer,
  TopContent,
  Text,
  HeaderContent,
  Header,
  SubHeader,
  RightContainer,
  FormContent,
  Username,
  UsernameInput,
  UsernameLabel,
  EmailLabel,
  EmailInput,
  PasswordLabel,
  PasswordInput,
  Button,
  Email,
  Password,
  Title,
  Link,
} from "./SignUpStyles";

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <TopContent>
            <Text>Already Have an Account?</Text>
            <Link href="/login">Sign In</Link>
          </TopContent>
          <HeaderContent>
            <Header>Welcome to Alpha Male</Header>
            <SubHeader>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at
              voluptatibus quo nemo pariatur odit
            </SubHeader>
          </HeaderContent>
          <FormContent>
            <Username>
              <UsernameLabel htmlFor="fullName">USERNAME</UsernameLabel>
              <UsernameInput
                name="fullName"
                type="text"
                placeholder="Enter Your Username"
              />
            </Username>
            <Email>
              <EmailLabel htmlFor="email">EMAIL</EmailLabel>
              <EmailInput
                name="email"
                type="email"
                placeholder="Enter Your Email"
              />
            </Email>
            <Password>
              <PasswordLabel htmlFor="password">PASSWORD</PasswordLabel>
              <PasswordInput
                name="password"
                type="password"
                placeholder="Enter Your Password"
              />
            </Password>
          </FormContent>
          <Button>Create an Account</Button>
        </LeftContainer>
        <RightContainer>
          <Title>Have The Best Shopping Experience</Title>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
