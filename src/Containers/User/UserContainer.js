import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../../Components/User/Profile'

class UserContainer extends Component {
    render() {
        return (
            <div className='container text-white'>
                {this.props.user.data ? <Profile history={this.props.history} /> : null}
            </div>
    
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.login.currentUser
    }
}

export default connect(mapStateToProps)(UserContainer)
