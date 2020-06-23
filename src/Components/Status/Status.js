import React from 'react';
import classes from './Status.module.css';

const status = (props) => {
  let statusMessage = <p>Next player is {props.player}</p>;
  return (
    <div className={classes.Status}>
     {statusMessage}
    </div>
  )
};

export default status;
