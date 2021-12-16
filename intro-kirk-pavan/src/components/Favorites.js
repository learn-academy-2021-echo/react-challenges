import React, { Component } from "react";

class Favorites extends Component {
  render() {
    return (
      <>
        <h4>Top 5 Disney Shows</h4>
        <ol reversed>
          <li>Gargoyles</li>
          <li>Darkwing Duck</li>
          <li>Even Stevens</li>
          <li>Talespin</li>
          <li>Duck Tales</li>
        </ol>
      </>
    );
  }
}

export default Favorites;
