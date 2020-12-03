import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../../Components/Post/PostForm'
import PostContainer from '../Post/PostContainer'

class HomeContainer extends Component {

    handleProfile = () => {
        this.props.history.push('/profile')
    }

    render() {
        return (
            <div className='container text-white p-2'>
                <div className='row'>
                    <div className='col-sm'>
                        <div>
                            <div className='jumbotron text-dark'>
                                <h1 className='display-4'>Welcome!</h1>
                                <p className='lead'>Sample Jumbotron</p>
                                <hr className='my-4'/>
                                <p></p>
                            </div>
                        </div>
                        <div style={{ position: 'fixed' }}>
                            <h1>Menu</h1>
                            <div>
                                <PostForm />
                            </div>
                            <br/>
                            <div className='row'>
                                <div className='col-sm'>
                                    <button type='button' onClick={() => this.handleProfile()} className='btn btn-primary'>Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <PostContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(HomeContainer)