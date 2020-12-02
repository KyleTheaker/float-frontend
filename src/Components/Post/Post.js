import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLike } from '../../Actions/likeActions'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import Comment from '../Comment/Comment'

class Post extends Component {

    state = {
        post_id: '',
        user_id: '',
        likes: this.props.post.likes.length,
        show: false
    }

    renderComments = () => {
        if (this.props.post.comments.length !== 0) {
            return this.props.post.comments.map( comment => <Comment comment={comment} />)
        }
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

    handleClose = () => {
        this.setState({
            ...this.state,
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            ...this.state,
            show: true
        })
    }

    render() {
        console.log(this.props.post)
        return (
            <div>
                <div className='card shadow p-3 mb-5 bg-transparent rounded' onClick={() => this.handleShow()}>
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

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Header</Modal.Title>
                    </Modal.Header>
                    <img src={this.props.post.image} className='card-img rounded' alt=''/>
                    <Modal.Body>{this.props.post.text}</Modal.Body>
                    <h5>Comments</h5>
                    <Modal.Footer>{this.renderComments()}</Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default connect(null, { createLike })(Post)