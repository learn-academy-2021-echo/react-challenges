import React, { Component } from 'react'


export default class GoodRobot extends Component {
    render() {
        return (
            <div>
                <h3>Good Robot</h3>
                <p>I hear you saying {this.props.yourInput}, is that right?</p>
            </div>
        )
    }
}
