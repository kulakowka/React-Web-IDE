import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers'
import App from './components/App/App'
import 'semantic-ui-css/semantic.min.css'
import initialState from './store/initialState'

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      promiseMiddleware
    )
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
