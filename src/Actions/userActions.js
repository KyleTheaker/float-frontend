export const fetchUserEdit = (info) => {
    return (dispatch) => {
        const token = localStorage.token
        if (token) {
            return fetch(`http://localhost:3001/users/${info.user_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    user: {
                        name: info.name,
                        bio: info.bio,
                        profile_pic: info.profile_pic,
                        header_image: info.header_image
                    }
                })
            })
            .then(resp => { return resp.json() })
            .then(data => {
                console.log(data)
            })
        }
    }
}

export const fetchUserShow = (info) => {
    return (dispatch) => {
        dispatch({ type: 'START_REQUEST'})
        const token = localStorage.token
        if (token) {
            return fetch(`http://localhost:3001/users/${info}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => { return resp.json() })
            .then(data => {
                let user = data.user
                dispatch({ type: 'GET_USER_SHOW', user })
            })
        }
    }
}

export const fetchFollowingPost = (info) => {
    return (dispatch) => {
        dispatch({ type: 'START_REQUEST'})
        const token = localStorage.token
        if (token) {
            return fetch('http://localhost:3001/followership', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    follower_id: info.follower_id,
                    followee_id: info.followee_id
                })
            })
            .then(resp => { return resp.json() })
            .then(data => {
                console.log(data)
            })
        }
    }
}