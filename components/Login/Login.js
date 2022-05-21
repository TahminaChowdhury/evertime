import React, { useState } from 'react';
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
        <Typography variant="h5" gutterBottom component="div"></Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className={classes.formTitle}>Login</h1>
          <div className={classes.formDiv}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              className={classes.formInput}
            />
            <label htmlFor="email" className={classes.formLabel}>
              Email
            </label>
          </div>
          <div className={classes.formDiv}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              className={classes.formInput}
            />
            <label htmlFor="email" className={classes.formLabel}>
              Password
            </label>
            {/* <button className={classes.iconBtn} onClick={toogleBtn}>
              <VisibilityOffIcon />
            </button> */}
          </div>
          <input type="submit" value="Login" className={classes.submit} />
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
