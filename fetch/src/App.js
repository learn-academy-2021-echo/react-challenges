import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: "",
    };
  }

  getlocation = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ggQXskXCOG4aH1iORntodMlJpp2rWPy1k4bvAPaI"
    )
      .then((response) => response.json())
      .then((payload) => this.setState({ locationData: payload }));
  };

  render() {
    console.log(this.state.locationData);
    return (
      <>
        <h1>hello world</h1>
        <button onClick={this.getlocation}>Click Here for location</button>
      </>
    );
  }
}

export default App;
