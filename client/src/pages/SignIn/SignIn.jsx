import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please Enter Valid Email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      resetForm(initialValues);
      setSubmitting(false);
    }, 1500);
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
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormContent>
                  <Email>
                    <EmailLabel htmlFor="email">EMAIL</EmailLabel>
                    <Field
                      as={EmailInput}
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <Error>
                      <ErrorMessage name="email" />
                    </Error>
                  </Email>
                  <Password>
                    <PasswordLabel htmlFor="password">PASSWORD</PasswordLabel>
                    <Field
                      as={PasswordInput}
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                    />
                    <Error>
                      <ErrorMessage name="password" />
                    </Error>
                  </Password>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Signing..." : "Sign In"}
                  </Button>
                </FormContent>
              </Form>
            )}
          </Formik>
        </LeftContainer>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
