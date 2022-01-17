import * as React from 'react';
import { Avatar, Button, Checkbox, FormControlLabel, FormHelperText, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { AddCircleOutline } from '@mui/icons-material';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpModal = () => {

    const paperStyle = {
        width: 300,
        backgroundColor: 'background.paper',
        margin: '0 auto',
        padding: '20px'
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
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match!')
            .required('Required'),
        termsAndCondition: Yup.boolean(["true"], "Accept Terms and Conditions").required('Required'),
    })

    const onSubmit = (values, props) => {
        // console.log(values)
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000)
        // console.log(props);
    };

    return (
        <React.Fragment>
            <Grid>
                <Paper elevation={20} sx={paperStyle}>
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
                                {/* <FormHelperText><ErrorMessage name='gender' /></FormHelperText> */}
                                <Field as={TextField} sx={textFieldStyle} name='password' label="Password" placeholder="Enter Password" type="password" size='small' helperText={<ErrorMessage name='password' />} fullWidth required />
                                <Field as={TextField} sx={textFieldStyle} name='confirmPassword' label="Confirm Password" placeholder="Enter Password Again" type="password" size='small' helperText={<ErrorMessage name='confirmPassword' />} fullWidth required />
                                <FormControlLabel control={<Field as={Checkbox} color="primary" name='termsAndCondition' style={{ margin: "0.3rem 0" }} />} label="By clicking Sign Up, I agree to the Terms and Conditions." />
                                <FormHelperText><ErrorMessage name='termsAndCondition' /></FormHelperText>
                                <Button sx={btnStyle} variant="contained" type="submit" color="primary" disabled={props.isSubmitting} fullWidth>{ props.isSubmitting ? 'Loading...' : 'Sign Up'}</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        </React.Fragment>
    );
};

export default SignUpModal;

