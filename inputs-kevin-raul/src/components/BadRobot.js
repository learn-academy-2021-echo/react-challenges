import React, { Component } from 'react';

class BadRobot extends Component {
  constructor(props){
    super(props)
  }



  render(){
    return(
      <>
        <h2>I hear you saying {this.props.blabla()}. Is that Correct?</h2>

      </>
    )
  }
}

export default BadRobot;
