import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import loginReducer from './Reducers/Login/loginReducer'
import logoutReducer from './Reducers/Logout/logoutReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  logout: logoutReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('root')
)

