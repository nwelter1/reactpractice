import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" Link="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" Link="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" Link="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" Link="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" Link="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
            </div>
        )
    }
}
