import React from 'react';
import Navbar from '../components/Navbar';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';


export default function Home() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Chilanka',
        'cursive',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className='home'>
        <Navbar></Navbar>
        <div className='home-bg'>
          <Typography
            variant='h4'
            className='home-content'>
            Woodog🐶 is an initiative to provide help to increasing
            stray animals by providing them food 🍞 and refuge 🏠 by connecting them with fellow
            helpful humans. On the application, two types of people can be registered 📥 one who can provide
            the location and condition of a nearby stray, and another who can provide information
            and arrange shelter 🏠 and food 🍞 for them.
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  )
}
