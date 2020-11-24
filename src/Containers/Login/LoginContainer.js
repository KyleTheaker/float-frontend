import React, { Component } from 'react'
import LoginForm from '../../Components/Login/LoginForm'
import FloatLoginPage from '../../Images/Float-LoginPage.png'

export default class LoginContainer extends Component {

    handleClick = () => {
        this.props.history.push('/signup')
    }

    render() {
        return (
            <div className='container-fluid' style={{ 
                backgroundImage: `url(${FloatLoginPage})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                height: '938px'
                }}>
                <br />
                <div className='row'>
                    <div className='col-md-8'></div>
                    <div className='col-sm-3'>
                        <div className='jumbotron'>
                            <h1 className='display-6'>Login Below!</h1>
                            <p className='lead'>If you don't yet have an account <button onClick={this.handleClick} className='btn btn-primary'>Sign Up</button></p>
                        </div>
                        <LoginForm history={this.props.history} fetchLogin={this.props.fetchLogin}/>
                    </div>
                </div>
            </div>
        )
    }
}