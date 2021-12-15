// As a user, I can see a Header component with the title of your app
// As a user, I can see a Profile component with information about you and your partner
// As a user, I can see a Footer component with your cohort name
// As a user, I can see a Favorites component with a list of top five favorites (ie. Top 5 Favorite TV Shows, Top 5 Favorite Songs, Top 5 Favorite Taco Shops)
// As a user, I can see a customized browser tab
import React, { Component } from 'react'

class Footer extends Component{
  render(){
    return(
      <>
        LEARN Academy
        <br />
        Delta 2021
      </>
    )
  }
}

export default Footer