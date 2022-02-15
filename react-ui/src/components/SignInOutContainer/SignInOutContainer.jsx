import React from 'react';
import SignInModal from '../SignInModal/SignInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import { Box, Button, Modal, Paper, Tab, Tabs, Typography } from '@mui/material';

const SignInOutContainer = () => {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const btnStyle = {
        color: "black",
        fontFamily: "inherit",
        fontSize: "1rem",
        border: "1px solid black",
        padding: "0 1rem",
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: "black",
            color: "white"
        }
    };

    const paperStyle = {
        width: 340,
        margin: '20px auto',
        backgroundColor: 'background.paper',
    };

    const tabStyle = {
        fontFamily: "inherit",
        fontSize: "1rem",
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <React.Fragment>
            <Button onClick={handleOpen} sx={btnStyle}>Sign In</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ transition: "all 0.3s ease-in-out" }}    
            >
                <Paper elevation={20} sx={paperStyle} >
                    <Tabs value={value} onChange={handleChange} variant='fullWidth' textColor="inherit" aria-label="basic tabs example">
                        <Tab sx={tabStyle} label="Sign In" />
                        <Tab sx={tabStyle} label="Sign Up" />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <SignInModal handleChange={handleChange} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SignUpModal />
                    </TabPanel>
                </Paper>
            </Modal>
        </React.Fragment>
    )
}

export default SignInOutContainer;
