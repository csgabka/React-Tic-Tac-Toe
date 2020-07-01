import React, { Component } from 'react';
import './App.css';

import Board from './Components/Board/Board';
import Status from './Components/Status/Status';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';

class App extends Component {
  state = {
    currentPlayer: false, //false is X, true is O
    message: null,
    gameOver: false
  }

//TODO

//RESTART BUTTON

setPlayer = () => {
  this.setState(prevState => ({currentPlayer: !prevState.currentPlayer
}))}


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

restartGameHandler = (event) => {

}

  render() {
    let button = (this.state.message) !== null ? <Button restart={this.restartGameHandler} /> : null;
    let modal = (this.state.gameOver) ? <Modal /> : null;
    return (
      <div className="App">
      {modal}
        <header className="Header">
          <h1>Tic Tac Toe</h1>
          <Status player={this.state.currentPlayer} message={this.state.message} winnerMessage={this.state.winnerMessage}/>
          {button}
          <Board setMessage={this.setMessageHandler}
          player={this.state.currentPlayer}
          whoIsNext={this.setPlayer}
          />
        </header>
      </div>
    );
  }

}

export default App;
