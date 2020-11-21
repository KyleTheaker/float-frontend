import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../../Components/Post/PostForm'
import PostContainer from '../Post/PostContainer'

class HomeContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div className='container'>
                Home Page
                <div className='row'>
                    <div className='col-sm'>
                        <h1>Menu</h1>
                        <div>
                            <PostForm createPost={this.props.createPost} user={this.props.user} />
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <PostContainer posts={this.props.posts} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(HomeContainer)