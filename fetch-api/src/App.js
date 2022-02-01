import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';



export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      locationData: null, 
      currentIpaddress: null
    }
  }
    apiRequest = () => {
       fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(payload => this.setState({locationData:payload.city, currentIpaddress:payload.ip}))
      .catch(error => console.log(error))
    }

    nasaRequest = () => {
  
        console.log(process.env.NASA_KEY);
       /*$fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=${process.env.NASA_KEY}`)
       .then(response => response.json())
      .then(payload => console.log(payload))
      .catch(error => console.log(error))
      */
      
    }

    
    render() {
    return <div>
      <button onClick={this.nasaRequest}>click for requests</button>
      <h1>{this.state.currentIpaddress}</h1>
      <h1>{this.state.locationData}</h1>

    </div>;
  }
}


