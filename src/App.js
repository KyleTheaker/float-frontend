import React, { Component } from 'react'

//MAKE SURE COMPONENTS THAT USE THESE IMPORTS WORK BERFORE MOVING ON TO NEXT SET
import { connect } from 'react-redux'

//MAKE SURE ABOVE IMPORTS ARE WORKING BEFORE YOU TACKLE THESE
import { Route, Switch, withRouter } from 'react-router-dom'

import LoginContainer from './Containers/Login/LoginContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginContainer />
      </div>
    )
  }
}

export default connect()(App)
