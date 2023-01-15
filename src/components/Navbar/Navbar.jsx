import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Button, Drawer, Avatar, useMediaQuery, } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles/';
import { Sidebar } from '..'


export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexWrap: 'wrap',
  },
}));

export const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  marginLeft: '3px',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}));

export const LinkButton = styled(Button)(() => ({
  marginRight: '3px',
  '&:hover': {
    color: 'white !important',
    textDecoration: 'none'
  }
}));

function Navbar() {
  const isAuthenticated = true;
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          {isMobile && (
            <StyledMenuButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => { }}
            >
              <Menu />
            </StyledMenuButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => { }}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {!isMobile && 'Search...'}

          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => { }}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <LinkButton
                color="inherit"
                onClick={() => navigate('/profile/:id')}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30, marginLeft: '3px' }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                />
              </LinkButton>
            )}
          </div>
          {isMobile && 'Search...'}
        </StyledToolbar>


        <div>
          <nav
            style={{
              xs: { display: 'none' },
              width: '240px',
              flexShrink: 0,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            {isMobile ? (
              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                ModalProps={{ keepMounted: true }}
                sx={{ paper: { width: '240px' } }}>
                <Sidebar setMobileOpen={setMobileOpen} />
              </Drawer>
            ) : (
              <Drawer
                sx={{ paper: { width: '240px' } }}
                variant="permanent"
                open>
                <Sidebar setMobileOpen={setMobileOpen} />
              </Drawer>)}
          </nav>
        </div>


      </AppBar>
    </>
  );
};

export default Navbar;