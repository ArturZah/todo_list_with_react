import React, { Component } from 'react'
import './css/AddTodo.css';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
     <form onSubmit={this.onSubmit} className="add-form">
        <input 
          type="title" 
          name="title" 
          placeholder="Add Todo..." 
          className="add-input"
          value={ this.state.title }
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
        />
      </form>
    )
  }
}

export default AddTodo
