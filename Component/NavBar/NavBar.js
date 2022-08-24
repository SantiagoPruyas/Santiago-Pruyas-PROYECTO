import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from '../../styles/NavBar.module.css';
import { indigo } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import AccountMenu from './menu';


const ResponsiveAppBar = () => {

  const navBar = createTheme({
    palette: {
      primary: {
        main: indigo[900],
      },
    }
  });

  return (
    <AppBar position="static" theme={navBar} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="https://nohestmm.github.io/SCL009-hackathon-peliculas/src/img/logo.png" alt='Logo de Rick and Morty' className={styles.img}></img>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NFT's Rick and Morty
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <AccountMenu></AccountMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
