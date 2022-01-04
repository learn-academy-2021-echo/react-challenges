import React, { Component } from 'react'

class Dice extends Component {
  render(){
    return(
      <>
      <h2> {this.props.rollResult} </h2>
      <button onClick={ this.props.oneThruSix} > Roll </button>
      </>
    )
  }
}

export default Dice
