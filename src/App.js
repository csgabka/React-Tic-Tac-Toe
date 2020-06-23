import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Components/Board/Board';
import Status from './Components/Status/Status';

class App extends Component {
  state = {
    currentPlayer: 'X'
  }


  render() {
    return (
      <div className="App">
        <header className="Header">
          <h1>Tic Tac Toe</h1>
          <Status player={this.state.currentPlayer}/>
          <Board />
        </header>
      </div>
    );
  }

}

export default App;
