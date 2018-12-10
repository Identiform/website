import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ReactGA from 'react-ga'

import * as actions from 'actions'
import Async from 'components/Async'
import env from 'env'
ReactGA.initialize(env.GA)
const Header = Async(() => import('components/Header'))
const Footer = Async(() => import('components/Footer'))
const supportsHistory = 'pushState' in window.history
const Home = Async(() => import('containers/Home'))
const NotImplemented = Async(() => import('containers/NotImplemented'))

const style = {
  background: 'linear-gradient( rgba(0, 0, 250, 1), rgba(0, 0, 100, 0.8) )',
  filter: 'alpha(opacity=100)',
  'background-repeat': 'no-repeat'
}

class App extends PureComponent {
  pageviewTracking() {
    ReactGA.pageview(window.location.pathName)
  }

  render() {
    return (
      <div>
        <div style={style}>
          <BrowserRouter onUpdate={this.pageviewTracking} forceRefresh={!supportsHistory}>
            <div>
              <Header />
              <Switch>
                <Route exact strict sensitive path='/' component={Home} />
                <Route exact strict sensitive path='/not_implemented' component={NotImplemented} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps, actions)(App)
