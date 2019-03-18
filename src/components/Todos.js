import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    //Loop przez state w app.js
    return this.props.todos.map((todo) => (
        //przekazanie prop do todoitem.. przy stosowaniu map() należy podać unikatową wartość dla key. Najlepiej ID.
        <TodoItem key={ todo.id } todo={ todo } markComplete={ this.props.markComplete } delTodo={ this.props.delTodo }/>
    ));
  }
}


//PropTypes - Walidacja wymaganych props-ów
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
