import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
    };
  }

  getlocation = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ggQXskXCOG4aH1iORntodMlJpp2rWPy1k4bvAPaI"
    )
      .then((responce) => responce.json())
      .then((payload) => this.setState({ locationData: payload }));
  };

  render() {
    return (
      <>
        <h1>hello world</h1>
        <button onclick={this.getlocation}>Click Here for location</button>
        <p>Your IP:{this.state.location.ip}</p>
        <p>Your Current Location:{this.state.locationData.city}</p>
      </>
    );
  }
}

export default App;
