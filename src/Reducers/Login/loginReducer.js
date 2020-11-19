export default function loginReducer(state = { user: '', token: '', requesting: false }, action) {
    switch (action.type) {
        case 'START_LOGGING_USER_REQUEST':
            console.log('reached login user action')
        default:
            console.log('default login action')
            return state
    }
}