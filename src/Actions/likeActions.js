export const createLike = (info) => {
    return (dispatch) => {
        const token = localStorage.token
        if (token) {
            return fetch('http://localhost:3001/likes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }, 
                body: JSON.stringify({
                    like: {
                        user_id: info.user_id,
                        post_id: info.post_id
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