import React from 'react';
import classes from './WatchDeatils.module.css'

const WatchDeatils = (props) => {
    const{name} = props.watches;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default WatchDeatils;