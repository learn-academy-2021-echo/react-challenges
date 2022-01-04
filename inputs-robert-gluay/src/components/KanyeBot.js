import React, { Component } from 'react'

export class KanyeBot extends Component {
    constructor(props){
        super(props) 
        
        
    }

    render() {
        return (
            <div>
        
                <h1>KanyeBot 5000</h1>
                <p>I'm gonna let you finish but Beyonce is {this.props.value}. </p>
            </div>
        )
    }
}

export default KanyeBot
