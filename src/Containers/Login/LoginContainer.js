import React, { Component } from 'react'

import LoginForm from '../Components/Login/LoginForm'

export default class LoginContainer extends Component {
    render() {
        return (
            <div>
                Login Container
                <LoginForm />
            </div>
        )
    }
}