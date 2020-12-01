const initialState = {
    user: {},
    requesting: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'START_REQUEST':
            return {
                ...state,
                requesting: true
            }
        case 'GET_USER_SHOW':
            return {
                ...state,
                user: action.user,
                requesting: false
            }
        default:
            return state
    }
}