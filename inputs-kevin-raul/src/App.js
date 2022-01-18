import React, { Component } from 'react';
import GoodRobot from './components/GoodRobot.js';
import BadRobot from './components/BadRobot.js';
import KanyeBot5000 from './components/KanyeBot5000.js';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({userInput: e.target.value})
  }

  blabla = (character) => {
    if (this.state.userInput = '') {
      this.setState({userInput: 'B'})
    } else if (this.state.userInput = 'B') {
      this.setState({userInput: 'L'})
    } else if (this.state.userInput = 'L') {
      this.setState({userInput: 'A'})
    } else if (this.state.userInput = 'A') {
      this.setState({userInput: 'B'})
    }
  }
  // <h1>Bad Robot</h1>
  // <BadRobot words={this.state.userInput}/>
  // <h1>Kanye Bot 5000</h1>
  // <KanyeBot5000 words={this.state.userInput}/>

  render(){
    return(
      <>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <p>{this.state.userInput}</p>
        <h1>Good Robot</h1>
        <GoodRobot words={this.state.userInput}/>
        <h1>Bad Robot</h1>
        <BadRobot words={this.state.userInput}/>
        <h1>Kanye Bot 5000</h1>
        <KanyeBot5000 words={this.state.userInput}/>
      </>
    )
  }
}

export default App;
