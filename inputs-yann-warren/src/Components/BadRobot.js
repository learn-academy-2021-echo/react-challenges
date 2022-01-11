import React, { Component } from 'react'

class BadRobot extends Component {
    constructor(props){
        super(props)
    }
    //to make the logic work, we need to take the input and make the Good Robot repeat it
    translate = (input) => {
        let newArr = []
        for (let i = 0; i < input.length; i++){
            if(i % 3 === 0){
                newArr.push("B")
            }
            else if(i % 3 === 1) {
                newArr.push("L")
            } 
            else if(i % 3 === 2) {
                newArr.push("A")
            }    
        } 
        return newArr
        
    }
   render() {
        return (
            <div className="BadRobot">
                <h1>Bad Robot</h1>
                <p> I hear you saying {this.translate(this.props.userInput)}. Is that correct? </p>
            </div>
        )
    }
}    
export default BadRobot