import React from 'react' 
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import {createStore , applyMiddleware} from 'redux'
import Reducer from './Reducer'
import reduxThunk from 'redux-thunk'
import axios from 'axios'
window.axios = axios

const store = createStore(Reducer , {} , applyMiddleware(reduxThunk))



ReactDOM.render(
<Provider store={store}>
<App /> 
</Provider>
, document.querySelector('#root'))

