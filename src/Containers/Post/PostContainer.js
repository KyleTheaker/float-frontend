import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../Actions/postActions'
import Post from '../../Components/Post/Post'

class PostContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    
    render() {
        return (
            <div>
                <div className='border border-dark'>
                    {
                        this.props.posts.post ? 
                        this.props.posts.post.data.map(post => <Post key={post.id} post_id={post.id} post={post.attributes} user={this.props.user}/>).reverse()
                         : 
                        null
                    } 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.login.currentUser,
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostContainer)