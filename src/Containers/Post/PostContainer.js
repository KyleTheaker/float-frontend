import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../Actions/postActions'
import Post from '../../Components/Post/Post'

class PostContainer extends Component {

    componentDidMount() {
        console.log('mounted')
        this.props.fetchPosts()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.posts.post !== undefined && this.props.posts.length !== undefined && prevProps.posts.post.data.length !== this.props.posts.length) {
            console.log(prevProps.posts.post.data.length)
            console.log(this.props.posts.length)
            console.log('updating')
            this.props.fetchPosts()
        }
    }
    
    render() {
        console.log(this.props.posts)
        return (
            <div>
                <div className='border border-dark'>
                    {
                        this.props.posts.post ? 
                        this.props.posts.post.data.map(post => <Post key={post.id} post_id={post.id} post={post.attributes} user={this.props.user}/>)
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