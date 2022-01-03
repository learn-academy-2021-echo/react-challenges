import React, { Component } from 'react'

export default class Rolls extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {
        return (
            <div>
                <h1>Rolls </h1>
                {this.props.list.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </div>
        )
    }
}
