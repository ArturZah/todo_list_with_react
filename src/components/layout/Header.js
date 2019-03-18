import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

export default function Header() {
  return (
    <div className="header-cnt">
      <h1>TodoList</h1>
      <div>
        <Link className="nav-link" to="/">Home</Link> | <Link className="nav-link" to="/About">About</Link>
      </div>
    </div>
  )
}
