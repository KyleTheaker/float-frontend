import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLike } from '../../Actions/likeActions'
import { fetchPosts } from '../../Actions/postActions'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { createComment } from '../../Actions/commentActions'
import Comment from '../Comment/Comment'

class Post extends Component {

    state = {
        post_id: '',
        user_id: '',
        likes: this.props.post.likes.length,
        show: false,
        comment: ''
    }

    renderComments = () => {
        if (this.props.post.comments.length !== 0) {
            return this.props.post.comments.map( comment => <Comment key={comment.id} comment={comment} />)
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

    handleChange = (e, post_id) => {
        let { name, value } = e.target
        this.setState({
            [name]: value,
            post_id: post_id,
            user_id: this.props.user.data.id
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createComment(this.state)
        this.setState({ 
            post_id: '',
            user_id: '',
            comment: ''
        }, () => {
            this.props.fetchPosts()
        })
    }

    render() {
        return (
            <div>
                <div className='card shadow p-3 mb-5 bg-transparent rounded' >
                    <div className='card-header'>
                        <Link key={this.props.post.user.id + 'u'} to={`/users/${this.props.post.user.id}`}>{this.props.post.user.username}</Link>
                    </div>
                    <img src={this.props.post.image} className='card-img rounded' alt=''/>
                    <div className='card-body'>
                        <p>{this.props.post.text}</p>
                        <p>{this.state.likes} <span onClick={() => this.handleLikes(this.props.post_id)}>♡</span></p>
                        <footer className='blockquote-footer'>
                            <div className='overflow-auto'>
                                {this.renderComments()}
                            </div>
                        </footer>
                        <form className='form-inline' onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <input type='text' name='comment' className='form-control bg-transparent' placeholder='comment' onChange={(e) => this.handleChange(e, this.props.post_id)} value={this.state.comment}/>
                            </div>
                            <input type='submit' className='btn btn-light mx-sm-3' value='Post'/>
                        </form>
                    </div>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Header</Modal.Title>
                    </Modal.Header>
                    <img src={this.props.post.image} className='card-img rounded' alt=''/>
                    <Modal.Body>{this.props.post.text}</Modal.Body>
                    <h5>Comments</h5>
                    <Modal.Footer>
                        <div className='overflow-auto'>
                            {this.renderComments()}
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default connect(null, { createLike, createComment, fetchPosts })(Post)