import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ background: 'opaque', boxShadow: 'none' }}
        position="static"
        sx={{ bgcolor: "#ffce00" }}>
        <Toolbar>
          <Typography
            className='date'
            style={{ textAlign: 'center' }}
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}>
            <b>{new Date().toDateString()}</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
