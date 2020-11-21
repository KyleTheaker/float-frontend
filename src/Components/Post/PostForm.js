import React, { Component } from 'react'

class PostForm extends Component {

    renderForm = () => {
        if (this.props.user.data !== undefined) {
            return <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
                <label htmlFor='text'>Float</label>
                <textarea className='form-control' name='text' onChange={this.handleChange} value={this.state.text} />
            </div>
            <input type='submit' className='btn btn-primary' value='Float' />
        </form>
        } else {
            console.log('cannot post yet')
        }
    }

    state = {
        text: '',
        user_id: ''
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value,
            user_id: this.props.user.data.id
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        await this.props.createPost(this.state)
        this.setState({ text: ''})
    }

    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        )
    }
}

export default PostForm