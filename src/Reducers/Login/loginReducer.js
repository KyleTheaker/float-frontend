export default function loginReducer(state = { users: [], token: '', requesting: false }, action) {
    switch (action.type) {
        case 'START_LOGGING_USER_REQUEST':
            return {
                ...state,
                users: [...state.users],
                requesting: true
            }
        case 'LOGIN_USER':
            return {
                ...state, 
                users: action.user,
                token: action.token,
                requesting: false
            }
        default:
            console.log('default login action')
            return state
    }
}