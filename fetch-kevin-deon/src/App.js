import './App.css';
import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      locationData: ""
    }
  }

getLocation = () => {
  fetch("https://ipapi.co/json/")
.then(response => response.json())
.then(payload => this.setState({locationData: payload}))
}

render() {
  return (
  <>
    <h1>Location App</h1>
    <button onClick={this.getLocation}>Click Here to see your location </button>
    <p>Your IP: {this.state.locationData.ip}</p>
    <p>Your Current Location: {this.state.locationData.city}</p>
  </>
    );
  }
}

export default App;
