export const fetchLogin = (info) => {
    console.log(info)
    return (dispatch) => {
        dispatch({ type: 'START_LOGGING_USER_REQUEST' })
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: info.username,
                password: info.password
            })
        })
        .then(resp => { return resp.json() })
        .then(data => {
            dispatch({ type: 'LOGIN_USER', data})
            console.log(data)
        })
    }
}