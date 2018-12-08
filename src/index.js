import React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from 'reducers/reducers'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from 'containers/App'
import registerServiceWorker from './registerServiceWorker'
// import { unregister } from './registerServiceWorker'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
// unregister()
