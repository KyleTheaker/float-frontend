const initialState = {
    posts: [],
    requesting: false
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'START_POSTS_REQUST':
            return { 
                ...state,
                requesting: true
            }
        case 'GET_POSTS':
            return {
                ...state, 
                posts: action.data,
                requesting: false
            }
        case 'ADD_POST':
            return {
                ...state,
                requesting: false
            }
        case 'DELETE_POST':
            if (state.posts.findIndex) {
                let idx = state.posts.findIndex(post => post.id === action.post_id)
                return {
                    posts: [...state.posts.slice(0, idx), ...state.posts.slice(idx + 1)],
                    requesting: false
                }
            }   
        default:
            return state
    }
}