import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      locationData: ""
    }
  }
  
  getLocation = () => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => this.setState({locationData: payload}))
  }
  
  render() {
  console.log(this.state.locationData)
  
  
    return(
       <div class= "body">
          <h1> Hello There </h1>
          <button onClick={this.getLocation}> Get Your Current Location</button>
          <p>Your IP Address is: {this.state.locationData.ip}</p>
          <p>Your current city is: {this.state.locationData.city}</p>

       </div>
    )
  }
}


export default App;
