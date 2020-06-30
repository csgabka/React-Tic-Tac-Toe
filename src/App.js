import React, { Component } from 'react';
import './App.css';

import Board from './Components/Board/Board';
import Status from './Components/Status/Status';

class App extends Component {
  state = {
    currentPlayer: false //false is X, true is O
  }

//TODO ONCLICK SET GRID value
//EVALUATE RESULTS


  render() {
    return (
      <div className="App">
        <header className="Header">
          <h1>Tic Tac Toe</h1>
          <Status player={this.state.currentPlayer} />
          <Board player={this.state.currentPlayer} />
        </header>
      </div>
    );
  }

}

export default App;
