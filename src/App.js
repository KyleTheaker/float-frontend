import React, { Component } from 'react'

//MAKE SURE COMPONENTS THAT USE THESE IMPORTS WORK BERFORE MOVING ON TO NEXT SET
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { fetchLogin } from './Actions/loginActions'
import { fetchPosts } from './Actions/postActions'
import { getProfileFetch } from './Actions/loginActions'

//Other imports, nothing too complicated here
import LoginContainer from './Containers/Login/LoginContainer'
import HomeContainer from './Containers/User/HomeContainer'
import UserNavBar from './Components/User/UserNavBar'

class App extends Component {

  //render components
  handleLogin = () => <LoginContainer fetchLogin={this.props.fetchLogin} />
  handleHome = () => <HomeContainer fetchPosts={this.props.fetchPosts} posts={this.props.posts} />

  componentDidMount() {
    this.props.getProfileFetch()
  }

  render() {
    return (
      <div className="App">
        <UserNavBar />
        <Switch>
          <Route path='/' exact component={this.handleLogin} />
          <Route path='/home' exact component={this.handleHome} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    users: state.users,
    posts: state.posts
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchLogin: () => dispatch(fetchLogin())
//   }
// }

export default connect(mapStateToProps, { fetchLogin, fetchPosts, getProfileFetch })(withRouter(App))
