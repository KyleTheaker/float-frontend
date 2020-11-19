export default function postReducer(state = [], action) {
    switch (action.type) {
        case 'START_POSTS_REQUST':
            return [...state]
        case 'GET_POSTS':
            console.log(action.data)
            return [...state, action.data]
        default:
            return state
    }
}