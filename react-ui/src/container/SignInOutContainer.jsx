import React from 'react';
import SignInModal from '../components/SignInModal';
import SignUpModal from '../components/SignUpModal';
import { Box, Button, Modal, Tab, Tabs, Typography } from '@mui/material';

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
    };

    const boxStyle = {
        position: 'relative',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid grey',
        borderRadius: '5px',
        boxShadow: '2px 2px 5px 5px rgba(0,0,0,0.75)',
        height: '78%',
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
            <Button onClick={handleOpen} sx={btnStyle} >Sign In</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ transition: "all 0.3s ease-in-out" }}    
            >
                <Box sx={boxStyle} >
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
                </Box>
            </Modal>
        </React.Fragment>
    )
}

export default SignInOutContainer;
