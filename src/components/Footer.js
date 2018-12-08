import React from 'react';

import Async from 'components/Async'
const Subscribe = Async(() => import('components/Subscribe'))

const div = {
  textAlign: 'center',
  padding: '10%'
}

const p = {
  fontSize: '0.8em',
  fontFamily: '\'Open Sans\', sans-serif'
}

const Footer = () => (
  <div style={div}>
    <Subscribe />
    <p style={p}>&copy; 2018, <a href="https://identiform.com">identiForm</a></p>
  </div>
)

export default Footer
