import React, { Component } from "react";

class Rolls extends Component {


    render() {
      return(
        <>
      <div>
        <ul>
          {this.props.numList.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      </>
      )
    }
  }
  
  export default Rolls;