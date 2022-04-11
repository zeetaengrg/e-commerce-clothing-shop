import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdLockOutline } from "react-icons/md";
import { login } from "../../../../redux/apiCalls";
import {
  FooterText,
  ForgotText,
  AccountText,
  SignUpLink,
} from "./SignInModal.styles";
import {
  Container,
  HeaderContent,
  Icon,
  HeaderText,
  TextField,
  Error,
  FormControl,
  Button,
} from "../Form.styles";

const SignInModal = ({ handleChange }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please Enter Valid Email!").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters!")
      .max(25, "Password must be at most 25 characters!")
      .required("Required"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      resetForm(initialValues);
      setSubmitting(false);
    }, 1500);
  };

  const handleClick = (e) => {
    login(dispatch, { email, pass });
  };

  return (
    <>
      <Container>
        <HeaderContent>
          <Icon>
            <MdLockOutline style={{ fontSize: "1.5rem" }} />
          </Icon>
          <HeaderText>Sign In</HeaderText>
        </HeaderContent>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form style={{ marginTop: "1.5rem" }}>
              <FormControl>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  placeholder="Email"
                  type="email"
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <Error>
                  <ErrorMessage name="email" />
                </Error>
              </FormControl>
              <FormControl>
                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  // onChange={(e) => setPass(e.target.value)}
                />
                <Error>
                  <ErrorMessage name="password" />
                </Error>
              </FormControl>
              <Field
                style={{ marginRight: "0.5rem" }}
                name="rememberMe"
                type="checkbox"
              />
              Remember Me
              <Button
                type="submit"
                disabled={isSubmitting}
                onClick={handleClick}
              >
                {isSubmitting ? "Loading..." : "Sign In"}
              </Button>
            </Form>
          )}
        </Formik>
        <FooterText>
          <ForgotText>Forgot Password?</ForgotText>
          <br />
          <AccountText>
            Don't have an account?
            <SignUpLink href="#" onClick={() => handleChange("event", 1)}>
              Sign Up
            </SignUpLink>
          </AccountText>
        </FooterText>
      </Container>
    </>
  );
};

export default SignInModal;
