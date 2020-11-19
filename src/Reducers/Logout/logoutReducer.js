export default function logoutReducer(state = { users: [] }, action) {
    switch (action.type) {
        case 'LOGOUT_USER':
            console.log('reached logout user action')
        default:
            console.log('default logout action')
            return state
    }
}