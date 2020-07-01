import React from 'react';
import classes from './Status.module.css';

const status = (props) => {

  let nextPlayer = null;
  (props.player) ? nextPlayer = 'O' : nextPlayer = 'X';
  let statusMessage = <p>Next player is: {nextPlayer}</p>;
  if (props.message !== null) {
    statusMessage = props.message
  }

  return (
    <div className={classes.Status}>
     {statusMessage}
    </div>
  )
};

export default status;
