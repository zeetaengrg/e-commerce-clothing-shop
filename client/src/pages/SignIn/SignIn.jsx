import { login } from "../../redux/apiCalls";
import { LeftContainer, RightContainer } from "./SignIn.styles";
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
  Button,
  Link,
  Title,
  Email,
  EmailLabel,
  EmailInput,
  Error,
} from "../SignUp/SignUp.styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    setIsSubmitting(true);
  };

  return (
    <Container>
      <Wrapper>
        <RightContainer>
          <Title>Enjoy The Best Shopping Experience</Title>
        </RightContainer>
        <LeftContainer>
          <TopContent>
            <Text>Don't have an Account?</Text>
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
            <Email>
              <EmailLabel htmlFor="email">EMAIL</EmailLabel>
              <EmailInput
                name="email"
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Error>{isSubmitting && !email && "Email is required"}</Error>
            </Email>
            <Password>
              <PasswordLabel htmlFor="password">PASSWORD</PasswordLabel>
              <PasswordInput
                name="password"
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Error>
                {isSubmitting && !password && "Password is required"}
              </Error>
            </Password>
            {error && <Error>Wrong Credentials</Error>}
            <Button type="submit" onClick={handleClick} disabled={isFetching}>
              {/* {isSubmitting ? "Sign In" : "Signing..."} */}
              Sign In
            </Button>
          </FormContent>
        </LeftContainer>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
