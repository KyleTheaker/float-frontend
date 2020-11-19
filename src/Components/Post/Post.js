import React from 'react'

const Post = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.post.text}</p>
        </div>
    )
}

export default Post