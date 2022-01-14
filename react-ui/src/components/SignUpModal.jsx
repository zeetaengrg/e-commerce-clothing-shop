import * as React from 'react';
import { Avatar, Box, Button, Checkbox, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { AddCircleOutline } from '@mui/icons-material';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpModal = () => {

    const boxStyle = {
        position: 'absolute',
        top: 314,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 352,
        bgcolor: 'background.paper',
        border: '1px solid grey',
        borderRadius: '5px',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.75)',
        p: '1rem 1.5rem',
    };

    const btnStyle = {
        fontFamily: "inherit",
        fontSize: "1rem",
    };

    const avatarStyle = {
        backgroundColor: 'rgb(245, 0, 87)',
    };

    const textFieldStyle = {
        margin: "0.3rem 0",
    };

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
            // .uppercase('Password must contain at least one uppercase letter!')
            // .lowercase('Password must contain at least one lowercase letter!')
            // .length('Password must contain at least one number!')
            // .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, 'Password must contain at least one special character!')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match!')
            .required('Required'),
    })

    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000)
        console.log(props);
    };

    return (
        <React.Fragment>
            <Grid>
                <Box sx={boxStyle}>
                    <Grid align="center">
                        <Avatar sx={avatarStyle}><AddCircleOutline /></Avatar>
                        <Typography variant="h4" sx={{ marginTop: "0.5rem" }}>Sign Up</Typography>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                        {props => (
                            <Form>
                                <Field as={TextField} sx={textFieldStyle} name='firstName' label="First Name" placeholder="Enter First Name" type="text" size='small' helperText={<ErrorMessage name='firstName' />} fullWidth required />
                                <Field as={TextField} sx={textFieldStyle} name='lastName' label="Last Name" placeholder="Enter Last Name" type="text" size='small' helperText={<ErrorMessage name='lastName' />} fullWidth required />
                                <Field as={TextField} sx={textFieldStyle} name='email' label="Email" placeholder="Enter Email" type="email" size='small' helperText={<ErrorMessage name='email' />} fullWidth required />
                                <FormLabel component="legend" style={{ marginTop: "0.3rem" }} >Gender</FormLabel>
                                <Field as={RadioGroup}
                                    aria-label="gender"
                                    defaultValue="male"
                                    name="gender "
                                    style={{ display: "initial"}}
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </Field>
                                <Field as={TextField} sx={textFieldStyle} name='password' label="Password" placeholder="Enter Password" type="password" size='small' helperText={<ErrorMessage name='password' />} fullWidth required />
                                <Field as={TextField} sx={textFieldStyle} name='confirmPassword' label="Confirm Password" placeholder="Enter Password Again" type="password" size='small' helperText={<ErrorMessage name='confirmPassword' />} fullWidth required />
                                <FormControlLabel control={<Field as={Checkbox} color="primary" name='termsAndCondition' style={{ margin: "0.3rem 0" }} />} label="By clicking Sign Up, I agree to the Terms and Conditions." />
                                <Button sx={btnStyle} variant="contained" type="submit" color="primary" disabled={props.isSubmitting} fullWidth>{ props.isSubmitting ? 'Loading...' : 'Sign Up'}</Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Grid>
        </React.Fragment>
    );
};

export default SignUpModal;

