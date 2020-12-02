import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserViewPost extends Component {

    render () {
        return (
            <div className='card shadow p-3 mb-5 bg-transparent rounded'>
                <img src={this.props.post.image} className='card-img rounded' alt=''/>
                <div className='card-body'>
                    <p>{this.props.post.text}</p>
                    <footer className='blockquote-footer'><cite>{this.props.user.attributes.name}</cite></footer>
                </div>
            </div>
        )
    }
    
}

export default connect()(UserViewPost)