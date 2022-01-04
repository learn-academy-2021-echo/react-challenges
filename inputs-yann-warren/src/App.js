import React, { Component } from 'react'
import './App.css';
import GoodRobot from './Components/GoodRobot';
import BadRobot from './Components/BadRobot';
//need to create a class "app"
//we need to render an input -> text-box 
//our parent comp. has a userInput, that is blank
//we need to add a value to our input 
//create 3 robots

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: "",
    }
  }
  handleChange = (e) => {
    console.log(e.target)
    this.setState({userInput: e.target.value})
  }
//for the Bad RObot 
  render() {
    return (
      <div>
        <h1>Enter Your Text Here</h1>
        <input type="text" value={this.state.userInput}
        onChange={this.handleChange} />

      < GoodRobot userInput={this.state.userInput} />

      < BadRobot userInput={this.state.userInput} />
      

      
      </div>
    )
  }
}





export default App;
