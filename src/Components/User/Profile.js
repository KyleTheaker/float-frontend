import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserPost from './UserPost'

class Profile extends Component {

    changeRoute = () => {
        this.props.history.push('/profile/edit')
    }

    goHome = () => {
        this.props.history.push('/home')
    }

    goLogin = () => {
        localStorage.removeItem('token')
        this.props.history.push('/')
    }

    renderHeader = () => {
        if (this.props.user.data.attributes.header_image !== null) {
            return this.props.user.data.attributes.header_image
        } else {
            return 
        }
    }

    render() {
        console.log(this.props.user)
        return (
             <div className='container'>
                <div className='container' style={{ padding: '10px' }}>
                    <svg onClick={this.goHome} style={{ cursor: 'pointer' }} width="35px" height="35px" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <svg onClick={this.goLogin} style={{ cursor: 'pointer' }} width="35px" height="35px" viewBox="0 0 16 16" className="bi bi-person-x float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zm1.146-7.85a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                <div className='container bg-white' style={{ 
                    width: 'auto', 
                    height: '199px', 
                    background: `url(${this.renderHeader()}) no-repeat center center`,
                    backgroundSize: '100% auto',
                    backgroundPosition: 'center'
                }}>
                    <div>
                        <br/>
                        <br/>
                        <img className='rounded-circle ml-4' src={this.props.user.data.attributes.profile_pic} alt='' style={{
                            width: '200px', 
                            height: '200px',
                            borderRadius: '50%',
                            border: '5px solid #232324'
                        }}/>
                    </div>
                </div>
                <div className='container border border-dark' style={{ padding: '10px'}}>
                <div className='row'>
                    <div className='col-md' style={{ padding: '35px'}}>
                        <div className='row' style={{ position: 'sticky', top: '0'}}>
                            <div className='col-md'>
                                <h1>{this.props.user.data.attributes.name}</h1>
                                <p className='text-muted'>@{this.props.user.data.attributes.username}</p>
                                <h5>{this.props.user.data.attributes.bio}</h5>
                                <p>{this.props.user.data.attributes.age}</p>
                                <button className='btn btn-primary' onClick={this.changeRoute}>Edit Profile</button>
                            </div>
                            <div className='col-md'>
                                <h1 className='font-weight-lighter'>Posts: {this.props.user.data.attributes.posts.length}</h1>
                                <h4 className='font-weight-lighter'>Comments: {this.props.user.data.attributes.comments.length}</h4>
                                <h4 className='font-weight-lighter'>Likes: {this.props.user.data.attributes.likes.length}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md'>
                        <div className='border border-dark'>
                            {this.props.user.data.attributes.posts.map(post => <UserPost key={post.id} post={post} user={this.props.user.data}/>).reverse()}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.login.currentUser
    }
}

export default connect(mapStateToProps)(Profile)