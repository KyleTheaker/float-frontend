import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../Actions/postActions'
import { fetchPosts } from '../../Actions/postActions'

import { storage } from '../../Firebase'

class PostForm extends Component {

    state = {
        text: '',
        image: '',
        user_id: ''
    }

    componentDidUpdate() {
        this.props.fetchPosts()
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value,
            user_id: this.props.user.data.id
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPost(this.state)
        this.setState({ text: '', image: ''})
    }

    handleFileChange = e => {
        if (e.target.files[0]) {
            this.setState({
                ...this.state,
                image: e.target.files[0]
            })
        }
    }

    handleUpload = e => {
        e.preventDefault()
        // console.log('hi')
        const uploadTask = storage.ref(`postImages/${this.state.image.name}`).put(this.state.image)
        uploadTask.on(
            'state_changed',
            snapshot => {},
            error => { console.log(error) },
            () => {
                storage
                    .ref('postImages')
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then( url => {
                        console.log(url)
                        this.setState({
                            image: url
                        })
                    })
            }
        )
    }


    // loadFile = (e) => {
    //   this.setState({
    //       ...this.state,
    //       image: URL.createObjectURL(e.target.files[0])
    //   })
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className='form-group'>
                        <label htmlFor='text'>Float</label>
                        <textarea className='form-control' name='text' onChange={this.handleChange} value={this.state.text} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='image'>Image url</label>
                        <input type='text' className='form-control' name='image' onChange={this.handleChange} value={this.state.image}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="file">Upload Image From Computer</label>
                        <input type="file" className='form-control' accept="image/*" name="image" onChange={this.handleFileChange}/>
                        <button onClick={this.handleUpload}>Upload</button>
                    </div>
                    <input type='submit' className='btn btn-primary' value='Float' />
                </form>
            </div>
        )
    }
}

// encType="multipart/form-data"

const mapStateToProps = state => {
    return {
      user: state.login.currentUser
    }
}

export default connect(mapStateToProps, { createPost, fetchPosts })(PostForm)