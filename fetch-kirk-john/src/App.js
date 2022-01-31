import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipInfo: "",
    };
  }

  getIP = () => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((payload) => this.setState({ ipInfo: payload }));
  };

  render() {
    return (
      <>
        <h1>IP Address</h1>
        <p>
          City: {this.state.ipInfo.city} {this.state.ipInfo.region_code}
        </p>
        <p>IP Address: {this.state.ipInfo.ip}</p>
        <button onClick={this.getIP}>Click for IP</button>
      </>
    );
  }
}

export default App;
