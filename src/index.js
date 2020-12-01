import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import loginReducer from './Reducers/Login/loginReducer'
import logoutReducer from './Reducers/Logout/logoutReducer'
import postReducer from './Reducers/Post/postReducer'
import userReducer from './Reducers/User/userReducer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
    
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const rootReducer = combineReducers({
  login: loginReducer,
  logout: logoutReducer,
  posts: postReducer,
  user: userReducer
})

const store = createStore(
  rootReducer, 
  enhancer
)

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
)

