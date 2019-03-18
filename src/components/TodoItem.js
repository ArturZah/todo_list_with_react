import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/TodoItem.css';

export class TodoItem extends Component {

//Dynamic styleing
  getStyle = () => {
    /* 
    -- Shorter Version --

      return {
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }

    */
    if(this.props.todo.completed) {
      return {
        textDecoration: 'line-through'
      }
    } else {
      return {
        textDecoration: 'none'
      }
    }
  }

  render() {
    
    const { id, title } = this.props.todo;

    return (
      <div className="todo-item" style={ this.getStyle() }>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
        <p>{ title }</p>
      </div>
    )
  }
}


//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
