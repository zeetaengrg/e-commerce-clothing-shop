import * as React from 'react';
import { Avatar, Box, Button, Checkbox, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { AddCircleOutline } from '@mui/icons-material';

const SignInModal = () => {

    const boxStyle = {
        position: 'absolute',
        top: 315,
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

    return (
        <React.Fragment>
            <Grid>
                <Box sx={boxStyle}>
                    <Grid align="center">
                        <Avatar sx={avatarStyle}><AddCircleOutline /></Avatar>
                        <Typography variant="h4" sx={{ marginTop: "0.5rem" }}>Sign Up</Typography>
                    </Grid>
                    <TextField sx={textFieldStyle} label="First Name" placeholder="Enter First Name" type="text" size='small' fullWidth required />
                    <TextField sx={textFieldStyle} label="Last Name" placeholder="Enter Last Name" type="text" size='small' fullWidth required />
                    <TextField sx={textFieldStyle} label="Email" placeholder="Enter Email" type="email" size='small' fullWidth required />
                    <FormLabel component="legend" style={{ marginTop: "0.3rem" }} >Gender</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="male"
                        name="radio-buttons-group"
                        style={{ display: "initial"}}
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    {/* <TextField sx={textFieldStyle} label="Phone Number" placeholder="Enter Phone Number" type="number" size='small' fullWidth required /> */}
                    <TextField sx={textFieldStyle} label="Password" placeholder="Enter Password" type="password" size='small' fullWidth required />
                    <TextField sx={textFieldStyle} label="Confirm Password" placeholder="Enter Password Again" type="password" size='small' fullWidth required />
                    <FormControlLabel control={<Checkbox color="primary"  style={{ margin: "0.3rem 0" }} />} label="By clicking Sign Up, I agree to the Terms and Conditions." />
                    <Button sx={btnStyle} variant="contained" color="primary" fullWidth>Sign Up</Button>
                </Box>
            </Grid>
        </React.Fragment>
    );
};

export default SignInModal;

