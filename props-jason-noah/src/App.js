import './App.css';
import React, { Component } from 'react'
import Dice from './components/Dice';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        numbers: ["1","2","3","4","5","6"],
        currentIndex: 0  ,
        numberHistory :[] 
    }
}
 rollDice = () =>{
   let nextIndex = Math.floor(Math.random()* this.state.numbers.length)
   this.setState({currentIndex: nextIndex})
   this.state.numberHistory.push(this.state.numbers[this.state.currentIndex]);
 }

  render() {
    return (
      <div id= "app">
      
      <h1 > 🎲 Dice Roller 🎲</h1>

      <div id = "display">
      <div id="dice">
        <Dice number = {this.state.numbers[this.state.currentIndex]} rolls={this.rollDice}/>
        
      </div>
       <div id = "rollHistory">
        
          <h3> Rolls History:</h3>
            <ol>
              {this.state.numberHistory.map(value =>{
                return <li>{value}</li>
              })}
            </ol>   
       </div>

      </div>
      </div>
    )
  }
}


