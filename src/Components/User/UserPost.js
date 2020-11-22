import React from 'react'

const UserPost = (props) => {
    return (
        <div className='card shadow p-3 mb-5 bg-transparent rounded'>
            <div className='card-body'>
                <p>{props.post.text}</p>
                <footer className='blockquote-footer'><cite>{props.user.attributes.name}</cite></footer>
            </div>
        </div>
    )
}

export default UserPost