import React, { Component } from 'react'

// const Post = (props) => {

//     return (
//         <div className='card shadow p-3 mb-5 bg-transparent rounded'>
//             <div className='card-body'>
//                 <p>{props.post.text}</p>
//                 <p>{props.post.likes.length} <span>♡</span></p>
//                 <footer className='blockquote-footer'><cite>{props.post.user.name}</cite></footer>
//             </div>
//         </div>
//     )
// }



class Post extends Component {

    state = {
        likes: this.props.post.likes.length
    }

    handleLikes = () => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1
        }))
    }

    render() {
        return (
            <div className='card shadow p-3 mb-5 bg-transparent rounded'>
                <div className='card-body'>
                    <p>{this.props.post.text}</p>
                    <p>{this.state.likes} <span onClick={() => this.handleLikes()}>♡</span></p>
                    <footer className='blockquote-footer'><cite>{this.props.post.user.name}</cite></footer>
                </div>
            </div>
        )
    }
}

export default Post