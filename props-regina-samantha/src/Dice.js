import React, { Component } from 'react'
export default class Dice extends Component {
//
  constructor(props){
    super(props)
    this.state = {
      numbers: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
       currentnumber: 0
    }
}
selectNumDice = () => {
  let nextSides = Math.floor(Math.random() * sides.length)
    this.setState({ currentPerson: nextPerson })
}

}
export default App
