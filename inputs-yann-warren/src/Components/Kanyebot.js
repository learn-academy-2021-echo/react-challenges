import React, { Component } from 'react'

class Kanyebot extends Component {
    constructor(props){
        super(props)
    }
    //to make the logic work, we need to take the input and make the Good Robot repeat it

    
    render() {
        return (
            <div className="Kaynebot">
                <h1>Kayne Bot</h1>
                <p> I'm gonna let you finish but Beyonce is {this.props.userInput}. </p>
            </div>
        )
    }
}
export default Kanyebot