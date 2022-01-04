import React, { Component } from 'react'

export class BadRobot extends Component {
    constructor(props){
        super(props) 
        this.state = {
            arrayLength : this.props.value.length     
        }
        
    }

    render() {
        return (
            <div>
                
                <div>{this.state.arrayLength}</div>
                <h1>Bad Robot</h1>
                <p>I hear you saying {this.props.value}. Is that correct?</p>
            </div>
        )
    }
}

export default BadRobot
