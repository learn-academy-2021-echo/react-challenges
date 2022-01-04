import React, { Component } from 'react'
import side1 from '../images/side1.png'
import side2 from '../images/side2.png'
import side3 from '../images/side3.png'
import side4 from '../images/side4.png'
import side5 from '../images/side5.png'
import side6 from '../images/side6.png'

class Dice extends Component {

    render() {
        return (
            <div>
                <h1> {this.props.number}</h1>
                
                <button onClick={this.props.rolls}>Click button to Roll 🎲</button>
            </div>
        )
    }
}

export default Dice