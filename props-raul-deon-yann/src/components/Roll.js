import React, {Component} from "react"

class Roll extends Component {
  constructor(props) {
    super(props)
    this.state = {
        dice: [],
        dots:[1,2,3,4,5,6]
    }
  }

  rollDice = ()=>{
      const{dice,dots}=this.state
      let toss =`$dots[Math.floor(Math.random(*dots.lenght))]`
      if (dice.indexOf(toss) === -1){}
        this.setState({dice: [...dice,toss]})
        alert("TEST")
  }

  render() {
    return (
      <>
      <button onClick={this.rollDice}>DICE</button>
      
      </>
    )
  }


}

export default Roll;
