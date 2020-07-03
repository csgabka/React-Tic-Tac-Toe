import React, { Component } from 'react';
import classes from './Board.module.css';

import Grid from './Grid/Grid';

class Board extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.hoverNextPlayer = this.hoverNextPlayer.bind(this);
    this.stopHoverNextPlayer = this.stopHoverNextPlayer.bind(this);
  }



    clickHandler = (index, event) => {
      if (this.props.grids[index] === null) {
        //update function callbacks
          this.props.updateGrid(index);
          }
  }

    hoverNextPlayer = (index, event) => {
      if (this.props.grids[index] === null) {
        let classesForCircle = [classes.Grid, classes.Circle];
        let classesForX = [classes.Grid, classes.X];
        (this.props.player) ?
        event.target.className = classesForCircle.join(' ') :
        event.target.className = classesForX.join(' ');
      }
    }

    stopHoverNextPlayer = (index, event) => {
      if (this.props.grids[index] === null) {
        event.target.className = classes.Grid;
      }
    }


render() {
  let grids = Object.values(this.props.grids)
  .map((value, index) => <Grid
  clicked={(event) => this.clickHandler(index, event)}
  hovered={(event) => this.hoverNextPlayer(index, event)}
  stopHovered={(event) => this.stopHoverNextPlayer(index, event)}
  key={index}
  value={value}
  currentPlayer={this.props.player}
  


  />
  );

  return (
    <div className={classes.Board}>
      {grids}
    </div>
);
}

}





export default Board;
