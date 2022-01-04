import React, { Component } from 'react'
import Dice from './Dice'
import Roller from './Roller'

class App extends Component {
constructor(props){
  super(props)
  this.state = {}
}
render() {
  return(
<>
<h1>Dice Roller</h1>
<Dice/>
<Roller/>
    </>
  );
}

}
export default App;
