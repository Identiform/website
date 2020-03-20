import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ReactGA from 'react-ga'

import * as actions from '../actions'
import Async from '../components/Async'
import env from '../env'
ReactGA.initialize(env.GA)
const Header = Async(() => import('../components/Header'))
const Footer = Async(() => import('../components/Footer'))
const supportsHistory = 'pushState' in window.history
const Home = Async(() => import('./Home'))
const NotImplemented = Async(() => import('./NotImplemented'))

const style = {
  background: 'linear-gradient( rgba(0, 0, 250, 1), rgba(0, 0, 100, 0.8) )',
  filter: 'alpha(opacity=100)'
}

class App extends PureComponent {
  initGA () {
    ReactGA.initialize('UA-137539256-1')
    // console.log('Initialized')
  }

  logPageView () {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
    // console.log(`Logged: ${window.location.pathname}`)
  }

  componentDidMount () {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        this.initGA()
        window.GA_INITIALIZED = true
      }
      this.logPageView()
    }
  }

  render() {
    return (
      <div>
        <div style={style}>
          <BrowserRouter forceRefresh={!supportsHistory}>
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
