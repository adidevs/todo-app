import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function LoginForm() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event) => {
        setOpen(false);
    };

    return (
        <div>
            <Button color='inherit' variant="outlined" onClick={handleClickOpen}>
                Login
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: 'center' }}>LOGIN</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Login to access your tasks
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="Username"
                        type="text"
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        id="name"
                        label="Password"
                        type="text"
                        variant="standard"
                    />
                    <DialogActions>
                        <Button onClick={handleClose}>Sign IN</Button>
                    </DialogActions>          
                    <DialogContentText sx={{ textAlign: 'center' }}>
                        OR
                    </DialogContentText>      
                    <DialogTitle sx={{ textAlign: 'center' }}>SIGN UP</DialogTitle>
                    <DialogContentText>
                        Create an Account to note down your tasks
                    </DialogContentText>
                    <TextField
                        required
                        margin="dense"
                        id="name"
                        label="Username"
                        type="text"
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        id="name"
                        label="Password"
                        type="text"
                        variant="standard"
                    />
                    <DialogActions>
                        <Button onClick={handleClose}>Sign Up</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}