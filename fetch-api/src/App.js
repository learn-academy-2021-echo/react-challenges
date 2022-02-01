// import  React, { Component } from 'react'
// class App extends Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       locationData: ""
//     }
//   }

//   getLocation = () =>{
//     fetch("https://ipapi.co/json/")
//     .then(response => response.json())
//     .then(payload => this.setState({locationData: payload}))
//   }  
//   render(){
//     return(

//       <>
//         <h1> Hello</h1>
//         <button onClick = {this.getLocation}>Get location</button>
//         <p>Your IP: {this.state.locationData.ip}</p>
//         <p>Your current location: {this.state.locationData.city}</p>
//         <p>Your country_name: {this.state.locationData.country_name}</p>
        
//       </>

//     )
//   }
// }
// export default App



import  React, { Component } from 'react'
// import mockData from './nasaMockData.js'

class App extends Component{
    constructor(props){
      super(props)
      this.state ={
        nasa: "",
        currentImage: null
      }  
    }

    componentDidMount(){

      fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_MY_NASA_KEY}`)
        .then(response => response.json())
        .then(payload => this.setState({nasa: payload.photos, currentImage: payload.photos[0].img_src}))
    }
    getImage = () => {
        let randomNum = Math.floor(Math.random() * this.state.nasa.length)
        this.setState({currentImage: this.state.nasa[randomNum].img_src})
       
    }
    render(){
      console.log(this.state.currentImage);
      return(
        <>
          <h1>Yo~</h1>
          <button onClick={this.getImage}> Get a Random Mars image</button>
          <br />
          {this.state.currentImage && <img src ={this.state.currentImage} alt= "Random pics on Mars" width= "500px"/>}
        </>
      )
    }
}
export default App