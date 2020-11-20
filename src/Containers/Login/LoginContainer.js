import React, { Component } from 'react'
import LoginForm from '../../Components/Login/LoginForm'

export default class LoginContainer extends Component {

    render() {
        return (
            <div>
                Login Container
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='jumbotron'>
                            <h1 className='display-4'>Hello, world!</h1>
                            <p className='lead'>blakjhdoiwjoa fioej;aoj;eoia;oiej eoiaj;eoijijf a;ije;ija</p>
                            <hr className='my-4' />
                            <p>feafefwewfadf</p>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <LoginForm fetchLogin={this.props.fetchLogin}/>
                    </div>
                </div>
            </div>
        )
    }
}