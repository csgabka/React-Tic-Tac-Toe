import React from 'react';
import classes from './Status.module.css';

const status = (props) => {

  let nextPlayer = null;
  (props.player) ? nextPlayer = 'O' : nextPlayer = 'X';
  let statusMessage = "Next player is: " + nextPlayer;
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
