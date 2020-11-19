import React, { Component } from 'react'

//MAKE SURE COMPONENTS THAT USE THESE IMPORTS WORK BERFORE MOVING ON TO NEXT SET
import { connect } from 'react-redux'
import { fetchLogin } from './Actions/loginActions'

//MAKE SURE ABOVE IMPORTS ARE WORKING BEFORE YOU TACKLE THESE
// import { Route, Switch, withRouter } from 'react-router-dom'

import LoginContainer from './Containers/Login/LoginContainer'

class App extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div className="App">
        <LoginContainer fetchLogin={this.props.fetchLogin} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    token: state.token,
    requesting: state.requesting
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchLogin: () => dispatch(fetchLogin())
//   }
// }

export default connect(mapStateToProps, { fetchLogin })(App)
