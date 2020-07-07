import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
  return (
    <div>
      <button onClick={props.reset}
      className={classes.Button}>Restart
      </button>
    </div>
  );
}

export default button;
