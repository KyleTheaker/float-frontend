import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../../Components/User/Profile'

class UserContainer extends Component {

    renderProfile = () => {
        if (this.props.user.data !== undefined) {
            return <Profile history={this.props.history} user={this.props.user} />
        } else {
            console.log('no user yet')
        }
    }

    render() {
        return (
            <div className='container text-white'>
                {this.renderProfile()}
            </div>
    
        )
    }
}

export default connect()(UserContainer)
