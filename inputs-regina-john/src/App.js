
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textInput: ""
    }
    handleChange = (e) => {
      this.setState({ userInput: e.target.value })
    }
  }
  render() {
    return (
      <>
        <input type="text" />
      </>
    )
  }
}

export default App
