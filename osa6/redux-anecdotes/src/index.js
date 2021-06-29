
import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './components/Store'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)