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
            <div className='container text-white'>
                Home Page
                <div className='row'>
                    <div className='col-sm'>
                        <div style={{ position: 'fixed' }}>
                            <h1>Menu</h1>
                            <div>
                                <PostForm user={this.props.user} />
                            </div>
                            <br/>
                            <div className='row'>
                                <div className='col-sm'>
                                    {/* <button onClick={() => this.handleProfile()} type='button' className='btn btn-secondary'>Profile</button> */}
                                    <svg onClick={() => this.handleProfile()} style={{ cursor: 'pointer' }} width="35px" height="35px" viewBox="0 0 16 16" className="bi bi-person-circle float-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                        <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <PostContainer user={this.props.user}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(HomeContainer)