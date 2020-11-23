export const fetchSignUp = (info) => {
    return (dispatch) => {
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    name: info.name,
                    age: info.age,
                    bio: info.bio,
                    username: info.username,
                    email: info.email,
                    password: info.password,
                    password_confirmation: info.password_confirmation
                }
            })
        })
        .then(resp => { return resp.json() })
        .then(data => {
            let user = data.user
            dispatch({ type: 'LOGIN_USER', user })
            localStorage.setItem('token', data.token)
        })
    }
}