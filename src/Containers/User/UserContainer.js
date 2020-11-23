import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../../Components/User/Profile'

class UserContainer extends Component {

    renderProfile = () => {
        if (this.props.user.data !== undefined) {
            return <Profile user={this.props.user} />
        } else {
            console.log('no user yet')
        }
    }

    render() {
        return (
            <div className='text-white'>
                User Container 
                {this.renderProfile()}
            </div>
    
        )
    }
}

export default connect()(UserContainer)
