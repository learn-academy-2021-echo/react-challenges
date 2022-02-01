
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationData:""


    }
  }

  getLocation = () => {
    fetch("https://ipapi.co/json/")
    .then (response => response.json())
    .then (payload => this.setState({locationData: payload}))
  }
  render() {
    return (

   <>
   <h1>Hello World</h1>
   <button onClick={this.getLocation}>Get Location Data</button>
   <p>Your Ip: {this.state.locationData.ip}</p>
   <p>Your City: {this.state.locationData.city}</p>
   
   
   </>    
    );
  }
}


 export default App;
