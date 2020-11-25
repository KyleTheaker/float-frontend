import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../Actions/postActions'
import Post from '../../Components/Post/Post'

class PostContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    renderPosts = () => {
        if (this.props.posts[0]){
            return this.props.posts[0].post.data.map(post => <Post key={post.id} post={post.attributes} user={this.props.user}/>).reverse()
        } else {
            console.log('No Posts Yet')
        }
    }

    render() {
        return (
            <div>
                Post Timeline
                <div className='border border-dark'>
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostContainer)