import React, { Component } from 'react'

export class GoodRobot extends Component {
    constructor(props){
        super(props)

    }




    render() {
        return (
            <div>
                <h1>Good Robot</h1>
                <p>I hear you saying {this.props.value}. Is that correct?</p>
            </div>
        )
    }
}

export default GoodRobot
