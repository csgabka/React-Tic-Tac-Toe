import React, { Component } from 'react';
import classes from './Grid.module.css';

class Grid extends Component {

  hoverNextPlayer(event) {
    let classesForCircle = [classes.Grid, classes.Circle];
    let classesForX = [classes.Grid, classes.X];
    (this.props.currentPlayer) ?
    event.target.className = classesForCircle.join(' ') :
    event.target.className = classesForX.join(' ');
  }

  StopHoverNextPlayer(event) {
    event.target.className = classes.Grid;
  }


  render() {

    return (
      <div onClick={this.props.clicked}
      className={classes.Grid}
      onMouseOver={(event) => this.hoverNextPlayer(event)}
      onMouseLeave={(event) => this.StopHoverNextPlayer(event)}>
        {this.props.value}
      </div>
    );
  }


};




export default Grid;
