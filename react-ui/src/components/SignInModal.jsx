import React from 'react';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const SignInModal = ({handleChange}) => {

    const paperStyle = {
        width: 300,
        backgroundColor: 'background.paper',
        margin: '0 auto',
        padding: '20px',
    };

    const textFieldStyle = {
        marginBottom: '0.5rem',
    };

    const avatarStyle = {
        backgroundColor: 'rgb(245, 0, 87)',
    };

    const btnStyle = {
        fontFamily: "inherit",
        marginBottom: "0.5rem",
        fontSize: "1rem"
    };

    const initialValues = {
        username: '',
        email: '',
        password: '',
        rememberMe: false,
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Please Enter Valid Email!')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters!')
            .max(25, 'Password must be at most 25 characters!')
            .required('Required'),
    });

    const onSubmit = (values, props) => {
        // console.log(values);
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000)
        // console.log(props);
    };

    return (
        <React.Fragment>
            <Grid>
                <Paper elevation={20} sx={paperStyle} >
                    <Grid align="center" >
                        <Avatar sx={avatarStyle}><LockOutlined/></Avatar>
                        <Typography variant="h4" sx={{ margin: "0.5rem 0" }}>Sign In</Typography>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                        {props => (
                            <Form>
                                {console.log(props)}
                                <Field as={TextField} sx={textFieldStyle} name='username' label="Username" placeholder="Enter Username" type="text" size="small" helperText={<ErrorMessage name='username' />} fullWidth required />
                                <Field as={TextField} sx={textFieldStyle} name='email' label="Email" placeholder="Enter Email" type="email" size="small" helperText={<ErrorMessage name='email' />} fullWidth required />
                                <Field as={TextField} sx={textFieldStyle} name='password' label="Password" placeholder="Enter Password" type="password" size="small" helperText={<ErrorMessage name='password' />} fullWidth required />
                                <FormControlLabel control={<Field as={Checkbox} name='rememberMe' />} label="Remember Me" />
                                <Button sx={btnStyle} variant="contained" type='submit' color="primary" disabled={props.isSubmitting} fullWidth >{ props.isSubmitting? "Loading..." : "Sign In" }</Button>
                            </Form>
                        )}
                    </Formik>
                    <Typography>
                        <Link href="#">Forgot Password?</Link>
                    </Typography>
                    <Typography>Don't have an account?
                        <Link style={{ marginLeft: "0.5rem" }} href="#" onClick={()=> handleChange("event", 1) }>Sign Up</Link>
                    </Typography>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default SignInModal;
