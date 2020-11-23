import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSignUp } from '../../Actions/signupActions'

class SignUpForm extends Component {

    state =  {
        name: '',
        age: '',
        bio: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    handleClick = () => {
        this.props.history.push('/')
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchSignUp(this.state)
        this.props.history.push('/home')
        this.setState({ 
            name: '',
            age: '',
            bio: '',
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
    }

    render() {
        return (
            <div className='card text-black'>
                <h5 className='card-header'>
                    <h1 className='display-6'>Sign Up Below!</h1>
                    <p className='lead'>If you already have an account <button onClick={this.handleClick} className='btn btn-primary'>Log In</button></p>
                </h5>
                <div className='card-body'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input className='form-control' type='text' name='name' onChange={this.handleChange} value={this.state.name} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='age'>Age</label>
                            <input className='form-control' type='number' name='age' onChange={this.handleChange} value={this.state.age} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='bio'>Bio</label>
                            <input className='form-control' type='text' name='bio' onChange={this.handleChange} value={this.state.bio} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='username'>Username</label>
                            <input className='form-control' type='text' name='username' onChange={this.handleChange} value={this.state.username} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input className='form-control' type='email' name='email' onChange={this.handleChange} value={this.state.email} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input className='form-control' type='password' name='password' onChange={this.handleChange} value={this.state.password} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password_confirmation'>Password Confirmation</label>
                            <input className='form-control' type='password' name='password_confirmation' onChange={this.handleChange} value={this.state.password_confirmation} />
                        </div>
                        <input type='submit' className='btn btn-primary' value='Signup'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { fetchSignUp })(SignUpForm)