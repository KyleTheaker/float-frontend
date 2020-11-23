import React, { Component } from 'react'
import LoginForm from '../../Components/Login/LoginForm'
import FloatLoginPage from '../../Images/Float-LoginPage.png'

export default class LoginContainer extends Component {

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
                        <div className='jumbotron'>
                            <h1 className='display-4'>Welcome!</h1>
                            <p className='lead'>If you have an account, login below</p>
                        </div>
                        <LoginForm history={this.props.history} fetchLogin={this.props.fetchLogin}/>
                    </div>
                </div>
            </div>
        )
    }
}