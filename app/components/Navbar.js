import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

function appBarLabel(label) {
  return (
    <Toolbar>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function EnableColorOnDarkAppBar() {

  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>

        <AppBar position="static" color="primary">
          {appBarLabel('HooDog')}

          {!session && (
            <div className='nav-items'>
              You are Not signed in
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '& > *': {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button color='inherit' onClick={signIn}>Sign In as a Finder</Button>
                  <Button color='inherit' onClick={signIn}>Sign In as a Helper</Button>
                </ButtonGroup>
              </Box>
            </div>
          )}
          {
            session && (
              <div className='nav-items'>
                Welcome {session.user.name}
                <div className='nav-links'>
                  <Button color="inherit">
                    <Link href="/secret"> Homepage</Link>
                  </Button>
                  <Button color="inherit" onClick={signOut}> SignOut</Button>
                </div>
              </div>
            )
          }
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}