import React, { Component } from 'react';

class GoodRobot extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
        <h2>I hear you saying {this.props.words}. Is that correct?</h2>

      </>
    )
  }
}

export default GoodRobot;
