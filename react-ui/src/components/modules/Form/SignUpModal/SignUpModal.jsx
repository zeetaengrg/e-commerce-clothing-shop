import * as React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
    FormLabelTitle,
    FormLabel,
    Label,
} from "./SignUpModal.styles";
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

const SignUpModal = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        password: '',
        confirmPassword: '',
        termsAndCondition: false,
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Please Enter Valid Email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters!')
            .max(25, 'Password must be at most 25 characters!')
            .matches(/[a-z]/, 'Password must one lowercase!')
            .matches(/[A-Z]/, 'Password must one uppercase!')
            .matches(/[0-9]/, 'Password must one number!')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match!')
            .required('Required'),
        termsAndCondition: Yup.boolean().oneOf([true], "You must Accept Terms and Conditions!")
    })

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            resetForm(initialValues);
            setSubmitting(false);
        }, 1500)
    };

    return (
        <React.Fragment>
            <Container>
                <HeaderContent>
                    <Icon>
                        <MdAddCircleOutline />
                    </Icon>
                    <HeaderText>
                        Sign Up
                    </HeaderText>
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
                                    name="firstName"
                                    label="First Name"
                                    type="text"
                                    placeholder="First Name"
                                />
                                <Error>
                                    <ErrorMessage name="firstName" />
                                </Error>
                            </FormControl>
                            <FormControl>
                                <Field 
                                    as={TextField}
                                    name="lastName"
                                    label="Last Name"
                                    type="text"
                                    placeholder="Last Name"
                                />
                                <Error>
                                    <ErrorMessage name="lastName" />
                                </Error>
                            </FormControl>
                            <FormControl>
                                <Field 
                                    as={TextField}
                                    name="email"
                                    label="Email"
                                    type="email"
                                    placeholder="Email"
                                />
                                <Error>
                                    <ErrorMessage name="email" />
                                </Error>
                            </FormControl>
                            <FormControl>
                                <FormLabelTitle>
                                    Gender
                                </FormLabelTitle>
                                <FormLabel>
                                    <Label>
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            style={{ marginRight:"0.5rem" }}
                                        />
                                        Male
                                    </Label>
                                    <Label>
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            style={{ marginRight:"0.5rem" }}
                                        />
                                        Female
                                    </Label>
                                    <Label>
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="Other"
                                            style={{ marginRight:"0.5rem" }}
                                        />
                                        Other
                                    </Label>
                                </FormLabel>
                            </FormControl>
                            <FormControl>
                                <Field
                                    as={TextField}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Password"
                                />
                                <Error>
                                    <ErrorMessage name="password" />
                                </Error>
                            </FormControl>
                            <FormControl>
                                <Field
                                    as={TextField}
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                                <Error>
                                    <ErrorMessage name="confirmPassword" />
                                </Error>
                            </FormControl>
                            <Label>
                                <Field
                                    style={{ marginRight: "0.5rem"}}
                                    name="termsAndCondition"
                                    type="checkbox"
                                />
                                By clicking Sign Up, I agree to the Terms and Conditions.
                                <Error>
                                    <ErrorMessage name="termsAndCondition" />
                                </Error>
                            </Label>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Sign Up'}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </React.Fragment>
    );
};

export default SignUpModal;

