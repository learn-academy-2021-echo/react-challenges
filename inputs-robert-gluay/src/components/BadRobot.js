import React, { Component } from 'react'

export class BadRobot extends Component {
    constructor(props){
        super(props) 
        this.state = {
            badArray: []
        }
        
    }

    blahFunct = () => {
        let newArr = this.badArray
        for (let index = 0; index < this.props.length; index++) {
            if (index % 3 === 0){
                 this.setState.badArray.push('B')
            } else if (index % 3 === 1){
                 this.setState.badArray.push('L')
            } else if (index % 3 === 2){
                 this.setState.badArray.push('A')
            }
        }return this.setState ({badArray: newArr})
    }

    render() {
        return (
            <div>
                
                <h1>Bad Robot</h1>
                {this.blahFunct}
                <p>I hear you saying {this.state.badArray}. Is that correct?</p>
                <p>{this.props.length}</p>
            </div>
        )
    }
}

export default BadRobot
