import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import loginReducer from './Reducers/Login/loginReducer'
import logoutReducer from './Reducers/Logout/logoutReducer'
import postReducer from './Reducers/Post/postReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  logout: logoutReducer,
  posts: postReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
)

