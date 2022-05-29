import { collapseClasses, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import classes from './Banner.module.css';
const Banner = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12} className={classes.banner}>

      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.watch}>
          <img
            src="https://i.ibb.co/hKKjFPh/watch-watch-swiss-longines-wallpaper-preview.jpg"
            alt=""
          />
          <div className={classes.categoryHeading}>
            <h2>MENS WATCHES</h2>
            <div className={classes.shopNowBtn}>
              <Link href="/shop">SHOP NOW</Link>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.watch}>
          <img
            src="https://i.ibb.co/9YDyBVb/UZf90k5nji-20210113091459.jpg"
            alt=""
          />
          <div className={classes.categoryHeading}>
            <h2>WOMEN WATCHES</h2>
            <div className={classes.shopNowBtn}>
              <Link href="/shop">SHOP NOW</Link>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Banner;
