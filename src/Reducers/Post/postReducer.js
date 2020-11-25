export default function postReducer(state = [], action) {
    switch (action.type) {
        case 'START_POSTS_REQUST':
            return [...state]
        case 'GET_POSTS':
            return [...state, action.data]
        case 'ADD_POST':
            return [...state, action.data]
        default:
            return state
    }
}