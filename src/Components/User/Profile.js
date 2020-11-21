import React, { Component } from 'react'
import UserPost from './UserPost'

class Profile extends Component {

    renderUserPosts = () => {
        return this.props.user.data.attributes.posts.map(post => <UserPost key={post.id} post={post} user={this.props.user.data}/>)
    }

    render() {
        return (
            <div className='container'>
                Profile
                <div className='row'>
                    <div className='col-md'>
                        <h1>{this.props.user.data.attributes.name}</h1>
                        <h5>{this.props.user.data.attributes.bio}</h5>
                        <p>{this.props.user.data.attributes.age}</p>
                    </div>
                    <div className='col-md'>
                        <div className='border border-light'>
                            {this.renderUserPosts()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile