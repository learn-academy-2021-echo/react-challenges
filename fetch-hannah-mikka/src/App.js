import React, { Component } from "react";
import nasaMarsMockData from "./nasaMarsMockData.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mars: nasaMarsMockData.photos,
      currentImage: null,
      rover: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_MY_NASA_KEY}`
    )
      .then((response) => response.json())
      .then((payload) => this.setState({ mars: payload.photos }));
  }

  getImageInfo = () => {
    let randomNum = Math.floor(Math.random() * this.state.mars.length);
    this.setState({
      currentImage: this.state.mars[randomNum].img_src,
      rover: this.state.mars[randomNum].rover.name,
    });
  };

  render() {
    console.log(this.state.currentImage);
    console.log(this.state.rover);

    return (
      <>
        <h1>Hello Mars!</h1>
        <button onClick={this.getImageInfo}>Generate image from Mars</button>
        <br />
        <br />
        <img
          src={this.state.currentImage}
          alt="random rover image of mars"
          width="400px"
        />
        <p>Rover:{this.state.rover} </p>
      </>
    );
  }
}

export default App;
