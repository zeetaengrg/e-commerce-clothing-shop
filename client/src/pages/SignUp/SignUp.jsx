import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
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
  EmailLabel,
  EmailInput,
  PasswordLabel,
  PasswordInput,
  ConfirmPassword,
  ConfirmPasswordLabel,
  ConfirmPasswordInput,
  Button,
  Email,
  Password,
  Title,
  Link,
  Terms,
  TermsLabel,
  TermsInput,
  Error,
} from "./SignUpStyles";

const SignUp = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please Enter Valid Email").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters!")
      .max(25, "Password must be at most 25 characters!")
      .matches(/[a-z]/, "Password must one lowercase!")
      .matches(/[A-Z]/, "Password must one uppercase!")
      .matches(/[0-9]/, "Password must one number!")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match!")
      .required("Required"),
    terms: Yup.boolean().oneOf([true], "You must Accept Terms and Conditions!"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      resetForm(initialValues);
      setSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Alpha Male | Create an Account</title>
      </Helmet>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                at voluptatibus quo nemo pariatur odit
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
                    <ConfirmPassword>
                      <ConfirmPasswordLabel htmlFor="confirmPassword">
                        CONFIRM PASSWORD
                      </ConfirmPasswordLabel>
                      <Field
                        as={ConfirmPasswordInput}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Your Password"
                      />
                      <Error>
                        <ErrorMessage name="confirmPassword" />
                      </Error>
                    </ConfirmPassword>
                    <Terms>
                      <Field as={TermsInput} name="terms" type="checkbox" />
                      <TermsLabel htmlFor="terms">
                        By clicking Sign Up, I agree to the Terms and
                        Conditions.
                      </TermsLabel>
                      <Error>
                        <ErrorMessage name="terms" />
                      </Error>
                    </Terms>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Creating..." : "Create an Account"}
                    </Button>
                  </FormContent>
                </Form>
              )}
            </Formik>
          </LeftContainer>
          <RightContainer>
            <Title>Have The Best Shopping Experience</Title>
          </RightContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default SignUp;
