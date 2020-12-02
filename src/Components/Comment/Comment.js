import React, { Component } from 'react'

class Comment extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>{this.props.comment.text}</p>
            </div>
        )
    }
}

export default Comment