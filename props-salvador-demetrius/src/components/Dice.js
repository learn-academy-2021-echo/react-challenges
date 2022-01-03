import React, { Component } from 'react'

export default class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>{`Dice is ${this.props.dice}`}</h1>
            </div>
        )
    }
}
