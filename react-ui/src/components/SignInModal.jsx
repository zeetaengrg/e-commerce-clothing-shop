import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';

const SignInModal = ({handleChange}) => {

    const boxStyle = {
        position: 'absolute',
        top: 281,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 352,
        bgcolor: 'background.paper',
        border: '1px solid grey',
        borderRadius: '5px',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        // boxShadow: '2px 2px 5px 5px rgba(0,0,0,0.75)',
        p: '1rem 1.5rem',
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

    return (
        <React.Fragment>
            <Grid>
                <Box sx={boxStyle} >
                    <Grid align="center" >
                        <Avatar sx={avatarStyle}><LockOutlined/></Avatar>
                        <Typography variant="h4" sx={{ margin: "0.5rem 0" }}>Sign In</Typography>
                    </Grid>
                    <TextField sx={textFieldStyle} label="Username" placeholder="Enter Username" type="text" fullWidth required />
                    <TextField sx={textFieldStyle} label="Email" placeholder="Enter Email" type="email" fullWidth required />
                    <TextField sx={textFieldStyle} label="Password" placeholder="Enter Password" type="password" fullWidth required />
                    <FormControlLabel control={<Checkbox />} label="Remember Me" />
                    <Button sx={btnStyle} variant="contained" type='submit' color="primary" fullWidth >Sign In</Button>
                    <Typography>
                        <Link href="#">Forgot Password?</Link>
                    </Typography>
                    <Typography>Don't have an account?
                        <Link style={{ marginLeft: "0.5rem" }} href="#" onClick={()=> handleChange("event", 1) }>Sign Up</Link>
                    </Typography>
                </Box>
            </Grid>
        </React.Fragment>
    )
}

export default SignInModal;
