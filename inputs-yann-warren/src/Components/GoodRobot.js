import React, { Component } from 'react'

class GoodRobot extends Component {
    constructor(props){
        super(props)
    }
    //to make the logic work, we need to take the input and make the Good Robot repeat it

    
    render() {
        return (
            <div className="GoodRobot">
                <h1>Good Robot</h1>
                <p> I hear you saying {this.props.userInput}. Is that correct? </p>
            </div>
        )
    }
}
export default GoodRobot