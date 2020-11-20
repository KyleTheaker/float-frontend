import React, { Component } from 'react'

class PostForm extends Component {
    state = {
        text: ''
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // this.props.createPost(this.state)
        this.setState({ text: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='text'>Float</label>
                    <input type='text' name='text' onChange={this.handleChange} value={this.state.text} />
                </div>
                <input type='submit' className='btn btn-primary' value='Float' />
            </form>
        )
    }
}

export default PostForm