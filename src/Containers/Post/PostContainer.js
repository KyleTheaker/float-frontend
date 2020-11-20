import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from '../../Components/Post/Post'

class PostContainer extends Component {

    renderPosts = () => {
        if (this.props.posts[0]){
            return this.props.posts[0].post.data.map(post => <Post key={post.id} post={post.attributes}/>)
        } else {
            console.log('No Posts Yet')
        }
    }

    render() {
        // console.log(window.history)
        return (
            <div>
                Post Timeline
                <div className='border border-light'>
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
}

export default connect()(PostContainer)