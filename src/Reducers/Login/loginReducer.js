export default function loginReducer(state = [], action) {
    switch (action.type) {
        case 'START_LOGGING_USER_REQUEST':
            return {
                ...state,
                requesting: true
            }
        case 'LOGIN_USER':
            console.log(action.user)
            return {
                ...state, 
                users: action.user,
                requesting: false
            }
        default:
            console.log('default login action')
            return state
    }
}