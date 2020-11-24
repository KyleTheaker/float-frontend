import React, { Component } from 'react'

//MAKE SURE COMPONENTS THAT USE THESE IMPORTS WORK BERFORE MOVING ON TO NEXT SET
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { fetchLogin } from './Actions/loginActions'
import { getProfileFetch } from './Actions/loginActions'
import EditProfileForm from './Components/User/EditProfileForm'


//Other imports, nothing too complicated here
import LoginContainer from './Containers/Login/LoginContainer'
import SignUpContainer from './Containers/Signup/SignUpContainer'
import HomeContainer from './Containers/User/HomeContainer'
import UserContainer from './Containers/User/UserContainer'
// import UserNavBar from './Components/User/UserNavBar'

class App extends Component {

  //render components
  handleLogin = () => <LoginContainer history={this.props.history} fetchLogin={this.props.fetchLogin} />
  handleHome = () => <HomeContainer history={this.props.history} user={this.props.login}/>
  handleUser = () => <UserContainer history={this.props.history} user={this.props.login} />
  handleSignUp = () => <SignUpContainer history={this.props.history} />
  handleEditProfileForm = () => <EditProfileForm history={this.props.history} user={this.props.login} />

  componentDidMount() {
    this.props.getProfileFetch()
  }

  componentDidUpdate() {
    if (this.props.location.pathname === '/' && localStorage.token !== undefined) {
      this.props.history.push('/home')
    }
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: '#232324'}}>
        <Switch>
          <Route path='/' exact component={this.handleLogin} />
          <Route path='/signup' exact component={this.handleSignUp} />
          <Route path='/home' exact component={this.handleHome} />
          <Route path='/profile' exact component={this.handleUser} />
          <Route path='/profile/edit' exact component={this.handleEditProfileForm} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.login.currentUser
  }
}

export default connect(mapStateToProps, { fetchLogin, getProfileFetch })(withRouter(App))
