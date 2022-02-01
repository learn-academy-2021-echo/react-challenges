import './App.css';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: null,
      state: null,
      nasaImage: null,
    }
  }

  componentDidMount(){

    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(payload => this.setState({state: payload.region_code, city: payload.city}))
      .catch(error => console.log(error))

    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
     .then(response => response.json())
     .then(payload => this.setState({nasaImage: payload.url}))
  }

  // getLocation = () => {
  //   fetch("https://ipapi.co/json/")
  //   .then(function(response) {
  //     response.json().then(jsonData => {
  //       console.log(jsonData);
  //     });
  //   })
  //   .catch(function(error) {
  //     console.log(error)
  //   });
  // }


  render() {
    return <div>
      <div  className='locator'>
      {/* <button onClick={this.getLocation}>
        Click here if you're lost
      </button> */}
      <h2>Are you lost?</h2>
      <h3>{this.state.state != null ? `You are in ${this.state.city}, ${this.state.state}.` : null}</h3>
    </div>
    <br/>
    <br/>
    <img src={this.state.nasaImage}></img>
    <br/>
    <br/>
    <p> hi</p>
    </div>;
  }
}
