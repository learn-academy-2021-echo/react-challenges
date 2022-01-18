import React, {Component} from "react"
import Roll from "./components/Roll"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
      <Roll/>
      
      </>
    )
  }


}

export default App;

// As a user, I can see an application called Dice Roller
// As a developer, I can create a React application with App.js as my stateful component
// As a developer, I can create two child components that will accept props from App.js


