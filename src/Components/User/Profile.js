import React, { Component } from 'react'
import UserPost from './UserPost'

class Profile extends Component {

    renderUserPosts = () => {
        return this.props.user.data.attributes.posts.map(post => <UserPost key={post.id} post={post} user={this.props.user.data}/>).reverse()
    }

    changeRoute = () => {
        this.props.history.push('/profile/edit')
    }

    goHome = () => {
        this.props.history.push('/home')
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
                <div className='container'>
                    {/* <svg width="35px" height="35px" viewBox="0 0 16 16" className="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
                        <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    </svg> */}
                    <svg onClick={this.goHome} width="35px" height="35px" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </div>
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