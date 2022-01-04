import React, { Component } from 'react'
import './App.css';
import GoodRobot from './components/GoodRobot'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        userInput: ""
    }
}

handleChange = (e) => {
    this.setState({userInput: e.target.value})
}

render() {
    return (
        <div>
            <input
                type='text'
                value={this.state.userInput}
                onChange={this.handleChange}
            />
            <p>{this.state.userInput}</p>
            <GoodRobot yourInput={ this.state.userInput }/>
        </div>
    )
}
}
