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
        console.log(this.state)
        this.props.fetchLogin(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' onChange={this.handleChange} value={this.state.username} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <input type='submit'/>
                </form>
            </div>
        )
    } 
}

export default LoginForm