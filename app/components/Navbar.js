import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {signIn,signOut, useSession} from "next-auth/react";

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
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
            <>
            You are Not signed in <br></br>
            <button onClick={signIn}>Sign In</button>
            </>
          )}
          {
            session && (
              <>
              Signed in as {session.user.email} <br/>
              <div>
                you are now signed in!!
              </div>
              <button>
                <Link href="/secret"> To the Homepage</Link>
              </button>
              <button onClick={signOut}> SignOut</button>
              </>
            )
          }
          </AppBar>
      </ThemeProvider>
    </Stack>
  );
}