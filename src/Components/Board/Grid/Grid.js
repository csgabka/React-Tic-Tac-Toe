import React from 'react';
import classes from './Grid.module.css';

const grid = (props) => {
  let blank = classes.Grid;
  let classesForCircle = [classes.Grid, classes.Circle];
  let classesForX = [classes.Grid, classes.X];
  return (
  <div onClick={props.clicked}
  className={(props.value === null) ?
    blank : (props.value === true) ?
    classesForCircle.join(' ') : classesForX.join(' ')
  }
  onMouseOver={props.hovered}
  onMouseLeave={props.stopHovered}>
    {props.value}
  </div>
);
}


export default grid;
