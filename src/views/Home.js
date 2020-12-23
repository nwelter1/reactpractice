import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h4>Partners</h4>
                <button onCLick = {() => this.props.handleGetPartners </div>style={{ marginLeft: '10px'}} className='btn btn-outline-success btn-sm'>Get Partners</button>
            </div>
            <ul class="list-group">
                {this.props.attendees.map(a => (
                    <li class="list-group-item">{a.FirstName}} {a.LastName}</li>
                ))}
                
            </ul>
        )
    }
}
