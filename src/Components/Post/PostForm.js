import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../Actions/postActions'
import { fetchPosts } from '../../Actions/postActions'

class PostForm extends Component {

    state = {
        text: '',
        image: '',
        user_id: ''
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value,
            user_id: this.props.user.data.id
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPost(this.state)
        this.setState({ text: '', image: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                    <div className='form-group'>
                        <label htmlFor='text'>Float</label>
                        <textarea className='form-control' name='text' onChange={this.handleChange} value={this.state.text} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='image'>Add an image:</label>
                        <input type='text' className='form-control' name='image' onChange={this.handleChange} value={this.state.image}/>
                    </div>
                    <input type='submit' className='btn btn-primary' value='Float' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.login.currentUser
    }
}

export default connect(mapStateToProps, { createPost, fetchPosts })(PostForm)