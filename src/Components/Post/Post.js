import React, { Component } from 'react'

class Post extends Component {

    state = {
        likes: this.props.post.likes.length
    }

    handleLikes = (post) => {
        console.log(post)
        console.log(this.props)
        this.setState((prevState) => ({
            likes: prevState.likes + 1
        }))
    }

    render() {
        return (
            <div className='card shadow p-3 mb-5 bg-transparent rounded'>
                {/* <div className='row no-gutters'> */}
                    {/* <div className='col-md-4'> */}
                        <img src={this.props.post.image} className='card-img rounded' alt=''/>
                    {/* </div> */}
                    {/* <div className='col-md-8'> */}
                        <div className='card-body'>
                            <p>{this.props.post.text}</p>
                            <p>{this.state.likes} <span onClick={() => this.handleLikes(this.props.post)}>♡</span></p>
                            <footer className='blockquote-footer'><cite>{this.props.post.user.name}</cite></footer>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>
        )
    }
}

export default Post