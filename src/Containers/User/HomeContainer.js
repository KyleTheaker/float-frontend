import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostContainer from '../Post/PostContainer'

class HomeContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        // console.log(this.props.posts[0].post)
        return (
            <div>
                Home Page
                <PostContainer posts={this.props.posts} />
            </div>
        )
    }
}

export default connect()(HomeContainer)