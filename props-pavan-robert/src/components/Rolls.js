import React, { Component } from "react";

class Rolls extends Component {


    render() {
      return(
        <>
      <div>
          {this.props.numList.map(item => (
            <div key={item}>{item}</div>
          ))}
      </div>
      </>
      )
    }
  }
  
  export default Rolls;