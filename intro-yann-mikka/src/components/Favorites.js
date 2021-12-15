import React, { Component } from 'react'

class Favorites extends Component{
    render(){
      return(
        <>
        <h3> Yann's Favorite TV Shows</h3>
        <ol>
            <li>Breaking Bad</li>
            <li>Vikings</li>
            <li>Rome</li>
            <li>Game Of Thrones</li>
            <li>Desperate Housewives </li> 
        </ol>
        <br></br>
        <h3>Mikka's Favorite TV Shows</h3>
        <ol>
            <li>M*A*S*H</li>
            <li>X-Files</li>
            <li>Gossip Girl</li>
            <li>Firefly</li>
            <li>Arrested Development</li>
        </ol>

        </>
      )
    }
  }
  
  export default Favorites
