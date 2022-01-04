import React, { Component } from 'react'
import Dice from './components/Dice'
import Roll from './components/Roll'

class App extends Component{

    state = {
    rollResult: "This will become a number, when you click the button below",
    rollLog: []

}
  oneThruSix = () => {

    let randomRoll = Math.floor(Math.random() * 6) + 1
    let log = this.state.rollLog
    log.push(randomRoll)
    this.setState({rollResult: randomRoll, rollLog: log})
  }

  render(){
    return(
      <>
        <h1>Dice Roller App!</h1>
        <Dice rollResult={this.state.rollResult} oneThruSix={this.oneThruSix}/>
        <Roll rollLog={this.state.rollLog.map(value => {
          return <p>{value}</p>
        })} />
      </>
    )
  }
}

export default App
