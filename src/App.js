import React, { Component } from 'react'

//MAKE SURE COMPONENTS THAT USE THESE IMPORTS WORK BERFORE MOVING ON TO NEXT SET
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { fetchLogin } from './Actions/loginActions'
import { fetchPosts } from './Actions/postActions'
import { getProfileFetch } from './Actions/loginActions'
import { createPost } from './Actions/postActions'

//Other imports, nothing too complicated here
import LoginContainer from './Containers/Login/LoginContainer'
import HomeContainer from './Containers/User/HomeContainer'
import UserContainer from './Containers/User/UserContainer'
// import UserNavBar from './Components/User/UserNavBar'

class App extends Component {

  //render components
  handleLogin = () => <LoginContainer fetchLogin={this.props.fetchLogin} />
  handleHome = () => <HomeContainer fetchPosts={this.props.fetchPosts} createPost={this.props.createPost} posts={this.props.posts} user={this.props.login}/>
  handleUser = () => <UserContainer user={this.props.login} />

  componentDidMount() {
    this.props.getProfileFetch()
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: '#232324'}}>
        <Switch>
          <Route path='/' exact component={this.handleLogin} />
          <Route path='/home' exact component={this.handleHome} />
          <Route path='/profile' exact component={this.handleUser} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.login.currentUser,
    posts: state.posts
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchLogin: () => dispatch(fetchLogin())
//   }
// }

export default connect(mapStateToProps, { fetchLogin, fetchPosts, getProfileFetch, createPost })(withRouter(App))
