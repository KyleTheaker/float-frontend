import React, { Component } from 'react'
import { connect } from 'react-redux'
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