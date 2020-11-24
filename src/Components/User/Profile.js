import React, { Component } from 'react'
import UserPost from './UserPost'

class Profile extends Component {

    renderUserPosts = () => {
        return this.props.user.data.attributes.posts.map(post => <UserPost key={post.id} post={post} user={this.props.user.data}/>)
    }

    changeRoute = () => {
        this.props.history.push('/profile/edit')
    }

    renderHeader = () => {
        if (this.props.user.data.attributes.header_image !== null) {
            return this.props.user.data.attributes.header_image
        } else {
            return 
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='container bg-white' style={{ 
                    width: 'auto', 
                    height: '199px', 
                    background: `url(${this.renderHeader()}) no-repeat center center`,
                    backgroundSize: '100% auto',
                    backgroundPosition: 'center'
                }}>
                    <br/>
                    <br/>
                    <img className='rounded-circle ml-4' src={this.props.user.data.attributes.profile_pic} alt='' style={{
                        border: '5px solid #232324'
                    }}/>
                </div>
                <div className='container border border-dark' style={{ padding: '10px'}}>
                <div className='row'>
                    <div className='col-md' style={{ padding: '35px'}}>
                        <h1>{this.props.user.data.attributes.name}</h1>
                        <p className='text-muted'>@{this.props.user.data.attributes.username}</p>
                        <h5>{this.props.user.data.attributes.bio}</h5>
                        <p>{this.props.user.data.attributes.age}</p>
                        <button className='btn btn-primary' onClick={this.changeRoute}>edit</button>
                    </div>
                    <div className='col-md'>
                        <div className='border border-dark'>
                            {this.renderUserPosts()}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Profile