import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        compleated: false
      },
      {
        id: 2,
        title: 'Make a dinner',
        compleated: false
      },
      {
        id: 3,
        title: 'Clean a room',
        compleated: false
      }
    ]
  }

  render() {
  
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
