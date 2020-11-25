import React, { Component } from 'react'
import SignUpForm from '../../Components/Signup/SignUpForm'
import FloatLoginPage from '../../Images/Float-LoginPage.png'

export default class SignUpContainer extends Component {

    render() {
        return (
            <div className='container-fluid' style={{ 
                backgroundImage: `url(${FloatLoginPage})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                height: '938px'
                }}>
                Sign Up Container
                <div className='row'>
                    <div className='col-md-8'></div>
                    <div className='col-sm-3'>
                        <SignUpForm history={this.props.history} />
                    </div>
                </div>
                
            </div>
        )
    }
}