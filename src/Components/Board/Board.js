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

  checkWin = () => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (let i = 0; i < winningCombination.length; i++) {
    const [a, b, c] = winningCombination[i];
    if (this.state.grids[a] && this.state.grids[b] &&
       this.state.grids[c]) {
         this.props.setMessage(true);
       }
      else if (this.state.grids[a] === false &&
        this.state.grids[b] === false &&
           this.state.grids[c] === false) {
             this.props.setMessage(false);
    }

  }
  }


checkDraw = () => {
  for(let grid in this.state.grids)
          if(this.state.grids[grid] === null) return false;
        return true;
}

    clickHandler = (index, event) => {
      if (this.state.grids[index] === null) {
        let updatedGrids = {...this.state.grids};
        updatedGrids[index] = this.props.player;

        this.setState({grids: updatedGrids},
          () => {
          this.props.whoIsNext();
          this.checkWin();
          if (this.checkDraw()) {
            this.props.setMessage('draw');
          }
        }
        );

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
