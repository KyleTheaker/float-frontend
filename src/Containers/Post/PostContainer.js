import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from '../../Components/Post/Post'

class PostContainer extends Component {

    renderPosts = () => {
        if (this.props.posts[0]){
            console.log(this.props.posts[0].post.data)
            return this.props.posts[0].post.data.map(post => <Post key={post.id} post={post.attributes}/>)
        } else {
            console.log(this.props.posts)
        }
    }

    render() {
        return (
            <div>
                Post Timeline
                <div>
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
}

export default connect()(PostContainer)