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