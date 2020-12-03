export const createComment = (info) => {
    return (dispatch) => {
        const token = localStorage.token
        if (token) {
            return fetch('http://localhost:3001/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }, 
                body: JSON.stringify({
                    comment: {
                        user_id: info.user_id,
                        post_id: info.post_id,
                        text: info.comment
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