import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension' // отладка в браузере
import {routerMiddleware, ConnectedRouter} from 'connected-react-router' // чтобы react-router был доступен в redux
import {Provider} from 'react-redux'

import createRootReducer from 'reducers'
import routes from 'routes'

const history = createBrowserHistory() // данные url
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)


