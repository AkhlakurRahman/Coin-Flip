import React from 'react';
import classes from './Coin.module.css';

const Coin = props => {
  return (
    <div className={classes.Coin}>
      <img src={props.currentFace.imgSrc} alt={props.currentFace.side} />
    </div>
  );
};

export default Coin;
