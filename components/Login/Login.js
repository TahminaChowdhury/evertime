import React, { useState } from 'react';
import Link from 'next/link';
import classes from './Login.module.css';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  //   const [state, setState] = useState(false);
  //   const toogleBtn = () => {
  //     setState(prevState => !prevState)
  //   }
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Grid className={classes.formContainer}>
      <Grid item className={classes.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className={classes.formTitle}>Login</h1>
          <div className={classes.formEmailInput}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              {...register("email")}
              className={classes.formInput}
            />
            <label htmlFor="email" className={classes.formLabel}>
              Email
            </label>
          </div>
          <div className={classes.formPasswordInput}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              {...register("password")}
              className={classes.formInput}
            />
            <label htmlFor="email" className={classes.formLabel}>
              Password
            </label>
            {/* <button className={classes.iconBtn} onClick={toogleBtn}>
              <VisibilityOffIcon />
            </button> */}
          </div>
          <Typography variant="p" component="div" sx={{ marginTop: '20px' }}>
            Forgot Password?
          </Typography>
          <input type="submit" value="Login" className={classes.submit} />
          <Typography
            variant="p"
            gutterBottom
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '60px 0px 0px 0px',
            }}
          >
            Or Login Using
          </Typography>
          <div className={classes.socialBtnsDiv}>
            <button className={classes.socialBtns}>
              <img
                src="https://i.ibb.co/Bscw6vG/Facebook-f-logo-2021-svg.png"
                alt=""
              />
            </button>
            <button className={classes.socialBtns}>
              <img
                src="https://i.ibb.co/x12WGhg/Google-G-Logo-svg.png"
                alt=""
              />
            </button>
            <button className={classes.socialBtns}>
              <img
                src="https://i.ibb.co/ZhpcKCF/1200px-Twitter-bird-logo-2012-svg.png"
                alt=""
              />
            </button>
          </div>
        </form>
        <Typography
          variant="p"
          component="div"
          sx={{
            textAlign: 'center',
          }}
        >
          Don't have an account?
          <Link href="/signup">Signup</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
