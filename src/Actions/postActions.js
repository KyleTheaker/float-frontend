export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({ type: 'START_POSTS_REQUEST' })
        fetch('http://localhost:3001/posts')
        .then(resp => { return resp.json() })
        .then(data => {
            dispatch({ type: 'GET_POSTS', data})
        })
    }
}

export const createPost = (info) => {
    return (dispatch) => {
        const token = localStorage.token
        if (token) {
            return fetch('http://localhost:3001/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    text: info.text,
                    image: info.image,
                    user_id: info.user_id
                })
            })
            .then(resp => { return resp.json() })
            .then(data => {
                console.log(data)
                // let user = data.user
                dispatch({ type: 'ADD_POST' })
                // localStorage.setItem('token', data.token)
            })
        }
    }
} 