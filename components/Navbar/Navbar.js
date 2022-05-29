import React from 'react';
import classes from './Navbar.module.css';
import Link from 'next/link';
import { AppBar, Toolbar, CssBaseline, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WatchRoundedIcon from '@mui/icons-material/WatchRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerComponent from '../DrawerComponent/DrawerComponent';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (

    <AppBar position="static"
    sx={{backgroundColor: "white", color: 'black', boxShadow: 'none'}}
    >
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className={classes.logo}>
        𝙀𝙫𝙚𝙧𝙏𝙞𝙢𝙚
        </Typography>
        {isMobile ? (
          <DrawerComponent></DrawerComponent>
        ) : (
          <div className={classes.navlinks}>
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
            <Link href="/shop">
              Shop
            </Link>
            <Link href="/contact">
              Contact Us
            </Link>
            <Link  href="/login">
              Login
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
