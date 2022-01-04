import React, { Component } from 'react'
import '../App.css';

export class Dice extends Component {
    constructor(props){
        super(props)    
    }

    render() {
        return (
            <div>
                <div className="bigDice">
                <div onClick={ this.props.diceRolls } className="dice-box">{this.props.dice}</div>
            
                </div>
            </div>
        )
    }
}

export default Dice
