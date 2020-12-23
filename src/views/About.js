import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h5>Names</h5>
          <ul>
            {this.state.names.map(name => (
              <li>{name}</li>
            ))}
          </ul>
            </div>
        )
    }
}
