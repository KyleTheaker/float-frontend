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
                                    <button onClick={() => this.handleProfile()} type='button' className='btn btn-secondary'>Profile</button>
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