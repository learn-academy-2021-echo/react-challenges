// We're using React and destructuring Component from the React library
import React, { Component } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'

// We create a new component that extends the Component class, which React provides
class App extends Component{

  // Render is a React lifecycle method
  // When the component is first put on the page, and every time something changes in our component, the render function runs automatically
  render(){

    // The render method returns JSX
    // React apps use a hybrid markup language called JSX to preprocess HTML (XML actually) back into plain old JavaScript before the file is sent to the browser
    return(
      // React fragments are used to wrap all the markup tags
      <>
        <Header />
        <Profile />
      </>
    )
  }
}

// Every component must be exported
export default App
