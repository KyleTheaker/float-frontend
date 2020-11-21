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
            <div>
                User Container 
                {this.renderProfile()}
            </div>
    
        )
    }
}

export default connect()(UserContainer)

{/* <div className='container'>
    User Page
    <div className='row'>
        <div className='col-sm'>
            <h1>Menu</h1>
        </div>
        <div className='col-md-8'>
            {this.renderProfile()}
        </div>
    </div>
</div> */}
