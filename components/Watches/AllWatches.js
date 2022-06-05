import React from 'react';
import classes from './AllWatches.module.css';
import { useRouter } from 'next/router';

const AllWatches = ({ watch }) => {
  const { id, img1, name, brand, price } = watch;
  
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push('/' + id);
  };
  return (
    <div className={classes.watchContainer}>
      <div className={classes.watches}>
        <img src={img1} alt="" />
        <h5 className={classes.watchBrand}>{brand}</h5>
        <h3 className={classes.watchName}>{name}</h3>
        <h4 className={classes.watchPrice}>$ {price}</h4>
        <button onClick={showDetailsHandler} className={classes.viewBtn}>View Product</button>
      </div>
    </div>
  );
};

export default AllWatches;
