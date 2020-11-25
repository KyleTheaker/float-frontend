import React, { Component } from 'react'

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // console.log(this.props)
        this.props.fetchLogin(this.state)
        this.setState({ username: '', password: '' })
    
    }

    render() {
        return (
            <div className='text-white'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' className='form-control' onChange={this.handleChange} value={this.state.username} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' className='form-control' onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <input type='submit' className='btn btn-primary' value='Login'/>
                </form>
                {this.props.error ? <p style={{ color: 'red' }}>Invalid username or password</p> : null}
            </div>
        )
    } 
}

export default LoginForm