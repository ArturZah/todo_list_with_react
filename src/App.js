import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';

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

  //Toggle Complete 
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed  // Toggle value true/false
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  //Add Todo
  addTodo = (title) => {
    const randomId = Math.floor((Math.random() * 10000) + 1);
    const newTodo = {
      id: randomId,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="main-cnt">
            <Header />
            <Route exact path="/" render={ props => (
              <React.Fragment>
                <AddTodo addTodo={ this.addTodo }/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={ this.delTodo }/>
              </React.Fragment>
            )} /> 
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
