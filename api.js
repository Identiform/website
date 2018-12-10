require('@babel/polyfill')
require('dotenv').config({ path: './.env' })
const express = require('express')
const app = express()
const { sendEmail } = require('./email')

const whitelist = ['http://127.0.0.1:3063', 'http://127.0.0.1:3000']
const corsOptions = (req, callback) => {
  let options
  if (whitelist.includes(req.header('Origin'))) {
    options = { origin: true }
  } else {
    options = { origin: false }
  }
  callback(null, options)
}

app.use(require('compression')())
app.use(require('body-parser').json())
app.use(require('cors')(corsOptions))

app.post('/contactus', (req, res) => {
  const email = typeof req.body.email === 'string' ? req.body.email : false
  const msg = typeof req.body.msg === 'string' ? req.body.msg : false
  const name = typeof req.body.name === 'string' ? req.body.name : false
  if (email && msg && name) {
    const subject = `Message from identiForm: ${name}`
    sendEmail(email, subject, msg, (err) => {
      res.setHeader('Content-Type', 'application/json')
      if (!err.error) {
        res.end(JSON.stringify({ status: 'sent' }))
      } else {
        res.end(JSON.stringify({ status: 'error' }))
      }
    })
  } else {
    res.end(JSON.stringify({ status: 'error' }))
  }
})

const PORT = process.env.API_PORT ? process.env.API_PORT : 3086
app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  }
  console.info(`==> listening on http://localhost:${PORT}.`)
})
