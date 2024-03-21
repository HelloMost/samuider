import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Nav.css'
import { Link } from 'react-router-dom';


function Nav() {
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Samuider
            </Typography>
          </Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCartOutlinedIcon />
            <span style={{ marginLeft: '4px', fontSize: '16px' }}>0</span>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav