import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../../Actions/postActions'

class UserPost extends Component {

    handleDelete = (post) => {
        console.log(post)
        this.props.deletePost(post)
    }
    render () {
        return (
            <div className='card shadow p-3 mb-5 bg-transparent rounded'>
                <img src={this.props.post.image} className='card-img rounded' alt=''/>
                <div className='card-body'>
                    <p>{this.props.post.text}</p>
                    <footer className='blockquote-footer'><cite>{this.props.user.attributes.name}</cite></footer>
                </div>
                <button onClick={() => this.handleDelete(this.props.post)}>delete</button>
            </div>
        )
    }
    
}

export default connect(null, { deletePost })(UserPost)