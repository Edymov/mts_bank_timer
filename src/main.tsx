import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from './containers/app/modules/Main'

import { store } from './store'

import './ui/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
