import React, { Component } from 'react';
import Todos from './components/Todos';

import './components/css/App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Make a dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Clean a room',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed  // Toggle value true/false
      }
      return todo;
    }) });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
