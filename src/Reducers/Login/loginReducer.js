const initialState = {
    currentUser: {},
    requesting: false,
    error: false
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'START_LOG_REQUEST':
            return {
                ...state,
                requesting: true
            }
        case 'LOGIN_USER':
            return {...state, currentUser: action.user, error: false, requesting: false}
        case 'ERROR_MESSAGE':
            return {...state, error: true, requesting: false}
        default:
            return state
    }
}