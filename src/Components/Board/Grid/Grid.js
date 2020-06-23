import React from 'react';
import classes from './Grid.module.css';

const grid = (props) => (
  <div onClick={props.clicked} className={classes.Grid}>
    {props.value}
  </div>
);

export default grid;
