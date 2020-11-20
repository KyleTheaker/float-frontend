import React from 'react'

const UserPost = (props) => {
    return (
        <div className='card shadow p-3 mb-5 bg-white rounded'>
            <div className='card-body'>
                <p>{props.post.text}</p>
                <footer className='blockquote-footer'><cite>Jasper</cite></footer>
            </div>
        </div>
    )
}

export default UserPost