import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
  return (<button onClick={props.restart} className={classes.Button}>Restart</button>);
}

export default button;
