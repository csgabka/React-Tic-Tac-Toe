import React, { Component } from 'react';
import './App.css';
//TO DO!!!!!!!!!!!!
//BUG! last step X wins it says checkDraw
//restart button

import Board from './Components/Board/Board';
import Status from './Components/Status/Status';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayer: false, //false is X, true is O
      message: null,
      gameOver: false,
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
  this.baseState = this.state;
  this.setMessageHandler = this.setMessageHandler.bind(this);
  this.updateGridHandler = this.updateGridHandler.bind(this);
  this.restartGame = this.restartGame.bind(this);
  this.checkWin = this.checkWin.bind(this);
  this.checkDraw = this.checkDraw.bind(this);
}

setMessageHandler = (param) => {
  switch(param) {
    case true:
    this.setState({message: 'Circle is the winner', gameOver: true})
    break;
    case false:
    this.setState({message: 'X is the winner!', gameOver: true});
    break;
    default:
    this.setState({message: 'It is a draw!!!', gameOver: true});
  }
}

updateGridHandler = (index) => {
  let updatedGrids = {...this.state.grids};
  updatedGrids[index] = this.state.currentPlayer;
  this.setState(prevState => ({currentPlayer: !prevState.currentPlayer,
     grids: updatedGrids}),
     () => {
       this.checkWin();
       this.checkDraw();
      }
    );
  }


  restartGame = () => {
    this.setState(this.baseState);
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
         this.setMessageHandler(true);
       }
      else if (this.state.grids[a] === false &&
        this.state.grids[b] === false &&
           this.state.grids[c] === false) {
             this.setMessageHandler(false);
    }
  }
  }

  checkDraw = () => {
    for(let grid in this.state.grids)
            if(this.state.grids[grid] === null) return false;
          this.setMessageHandler('draw');
  }

  render() {
    let button = (this.state.message) !== null ? <Button reset={this.restartGame}/> : null;
    let modal = (this.state.gameOver) ? <Modal /> : null;
    return (

      <div className="App">
      {modal}
        <header className="Header">
          <h1>Tic Tac Toe</h1>
          <Status player={this.state.currentPlayer}
          message={this.state.message} />
          {button}
          <Board setMessage={this.setMessageHandler}
          player={this.state.currentPlayer}
          grids={this.state.grids}
          updateGrid={(index) => this.updateGridHandler(index)}

          />
        </header>
      </div>

    );
  }

}

export default App;
