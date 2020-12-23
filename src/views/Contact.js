import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h5>Locations</h5>
          <ul>
            {this.state.locations.map(l => (
              <li>{l}</li>
            ))}
          </ul>
            </div>
        )
    }
}
