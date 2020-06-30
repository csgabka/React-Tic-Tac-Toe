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

    clickHandler = (index) => {
       let updatedGrids = {...this.state.grids};
       updatedGrids[index] = 'X';
       this.setState({grids: updatedGrids});
       this.props.setPlayer();
    }

render() {
  let grids = Object.values(this.state.grids)
  .map((value, index) => <Grid
  clicked={(event) => this.clickHandler(index)}
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
