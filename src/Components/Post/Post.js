import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLike } from '../../Actions/likeActions'
import { Link } from 'react-router-dom'

class Post extends Component {

    state = {
        post_id: '',
        user_id: '',
        likes: this.props.post.likes.length
    }

    handleLikes = (post_id) => {
        this.setState((prevState) => ({
            post_id: post_id,
            user_id: this.props.user.data.id,
            likes: prevState.likes + 1
        }), () => this.handleState())
    }

    handleState = () => {
        this.props.createLike(this.state)
        this.setState({
            post_id: '',
            user_id: ''
        })
    }

    render() {
        return (
            <div className='card shadow p-3 mb-5 bg-transparent rounded'>
                <img src={this.props.post.image} className='card-img rounded' alt=''/>
                <div className='card-body'>
                    <p>{this.props.post.text}</p>
                    <p>{this.state.likes} <span onClick={() => this.handleLikes(this.props.post_id)}>♡</span></p>
                    <footer className='blockquote-footer'>
                        <cite>
                            <Link key={this.props.post.user.id + 'u'} to={`/users/${this.props.post.user.id}`}>{this.props.post.user.username}</Link>
                        </cite>
                    </footer>
                </div>
            </div>
        )
    }
}

export default connect(null, { createLike })(Post)