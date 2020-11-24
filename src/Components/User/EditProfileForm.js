import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserEdit } from '../../Actions/userActions'

class EditProfileForm extends Component {

    state = {
        name: '',
        bio: '',
        profile_pic: '',
        header_image: '',
        user_id: this.props.user.data.id
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchUserEdit(this.state)
        this.props.history.push('/profile')
        this.setState({
            name: '',
            bio: '',
            profile_pic: '',
            header_image: ''
        })
    }

    render() {
        return (
            <div className='text-white'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Display Name</label>
                        <input type='text' name='name' className='form-control' onChange={this.handleChange} value={this.state.name} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='bio'>Bio</label>
                        <textarea type='text' name='bio' className='form-control' onChange={this.handleChange} value={this.state.bio} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='profile_pic'>Profile Picture</label>
                        <input type='text' name='profile_pic' className='form-control' onChange={this.handleChange} value={this.state.profile_pic} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='header_image'>Header Image</label>
                        <input type='text' name='header_image' className='form-control' onChange={this.handleChange} value={this.state.header_image} />
                    </div>
                    <input type='submit' className='btn btn-primary' value='Submit Changes'/>
                </form>
            </div>
        )
    }
}

export default connect(null, { fetchUserEdit })(EditProfileForm)