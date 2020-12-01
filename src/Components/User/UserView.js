import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserShow } from '../../Actions/userActions'
import UserPost from './UserPost'

class UserView extends Component {

    componentDidMount() {
        let user_id = parseInt(this.props.match.params.userId)
        this.props.fetchUserShow(user_id)
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

    renderUserShow = () => {
        if (this.props.user.data !== undefined) {
            console.log(this.props.user)
            return <div className='container text-white'>
            <div className='container' style={{ padding: '10px' }}>
                <svg onClick={this.goHome} style={{ cursor: 'pointer' }} width="35px" height="35px" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
        } else {
            return 
        }
    }

    render() {
        return (
            <div>
                {this.renderUserShow()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps, { fetchUserShow })(UserView)