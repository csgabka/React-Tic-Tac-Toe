import React from 'react';
import classes from '../../Board/Board.module.css';

const grid = (props) => {
    return (

      <div onClick={props.clicked}
      className={classes.Grid}
      onMouseOver={props.hovered}
      onMouseLeave={props.stopHovered}>
        {props.value}
      </div>
    );
  }

export default grid;
