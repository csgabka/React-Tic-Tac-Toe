import React, { Component } from 'react';
import classes from './Board.module.css';

import Grid from './Grid/Grid';

class Board extends Component {
  state = {
    grids : {
      '0': null,
      '1': null,
      '2': null,
      '3': null,
      '4': null,
      '5': null,
      '6': null,
      '7': null,
      '8': null
    }

  }

    clickHandler = (index, event) => {
      if (this.state.grids[index] === null) {
        let updatedGrids = {...this.state.grids};
        updatedGrids[index] = this.props.player;
        this.setState({grids: updatedGrids});
        this.props.whoIsNext();
        let classesForCircle = [classes.Grid, classes.Circle];
        let classesForX = [classes.Grid, classes.X];
        (this.props.player) ?
        event.target.className = classesForCircle.join(' ') :
        event.target.className = classesForX.join(' ');
      }
    }

    hoverNextPlayer = (index, event) => {
      if (this.state.grids[index] === null) {
        let classesForCircle = [classes.Grid, classes.Circle];
        let classesForX = [classes.Grid, classes.X];
        (this.props.player) ?
        event.target.className = classesForCircle.join(' ') :
        event.target.className = classesForX.join(' ');
      }
    }

    stopHoverNextPlayer = (index, event) => {
      if (this.state.grids[index] === null) {
        event.target.className = classes.Grid;
      }
    }

render() {
  let grids = Object.values(this.state.grids)
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
