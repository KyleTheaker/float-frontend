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