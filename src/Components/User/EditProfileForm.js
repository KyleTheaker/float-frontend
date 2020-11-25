import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserEdit } from '../../Actions/userActions'

import FloatLoginPage from '../../Images/Float-LoginPage.png'

class EditProfileForm extends Component {

    state = {
        name: '',
        bio: '',
        profile_pic: '',
        header_image: '',
        user_id: ''
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value,
            user_id: this.props.user.data.id
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

    goBack = () => {
        this.props.history.push('/profile')
    }

    render() {
        return (
            <div className='container-fluid' style={{ 
                backgroundImage: `url(${FloatLoginPage})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                height: '938px'
                }}>
                <div className='row'>
                    <div className='col-md-8'></div>
                    <div className='col-sm-3'>
                        <br/>
                        <br/>
                        <div className='card text-black'>
                            <div className='card-header'>
                                <h1 className='display-6'>Profile Edit!</h1>
                                <p className='lead'>Made a mistake? <button onClick={this.goBack} className='btn btn-primary'>Go Back!</button></p>
                            </div>
                            <div className='card-body'>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { fetchUserEdit })(EditProfileForm)