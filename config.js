require('dotenv').config({ path: './.env' })
const { strictEqual } = require*('assert')
strictEqual(typeof process.env.EMAIL_DOMAIN, 'string')
strictEqual(typeof process.env.MAILGUN_API_KEY, 'string')
strictEqual(typeof process.env.API_PORT, 'string')

const dev = {
  mailgun: {
    nameFrom: 'identiForm',
    domainName: process.env.EMAIL_DOMAIN,
    apiKey: process.env.MAILGUN_API_KEY
  },
  apiUrl: `http://localhost:${process.env.API_PORT}`
}

const prod = {
  mailgun: {
    nameFrom: 'identiForm',
    domainName: process.env.EMAIL_DOMAIN,
    apiKey: process.env.MAILGUN_API_KEY
  },
  apiUrl: `http://localhost:${process.env.API_PORT}`
}

const configs = {
  dev,
  prod
}
  
const env = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : ''
const config = typeof configs[env] === 'object' ? configs[env] : configs['dev']
  
export {
  config
}
