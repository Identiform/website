const Greenlock = require('greenlock')
const { homedir } = require('os')
const { join } = require('path')
const { accessSync } = require('fs')
const { config } = require('./config')
const http01 = require('le-challenge-fs').create({ webrootPath: '/tmp/acme-challenges' })
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')

const approveDomains = (opts, certs, cb) => {
  opts.communityMember = true
  opts.challenges = { 'http-01': http01 }
  if (certs) {
    opts.domains = certs.altnames
  } else {
    opts.email = config.tlsEmail
    opts.agreeTos = true
    opts.renewWithin = (91 * 24 * 60 * 60 * 1000)
    opts.renewBy = (90 * 24 * 60 * 60 * 1000)
    opts.domains = [config.host, `www.${config.host}`]
  }
  cb(null, { options: opts, certs: certs })
}

var servers = {}
const app = (req, res) => {
  const hostname = req.headers.host
  const srvpath = join('/opt/', hostname.split('.')[0], 'build')

  if (!servers[hostname]) {
    try {
      accessSync(srvpath)
      servers[hostname] = serveStatic(srvpath, { redirect: true, index: ['index.html'] })
    } catch(e) {
      finalhandler(req, res)
    }
  }

  servers[hostname](req, res, finalhandler(req, res));
}

const greenlock = Greenlock.create({
  // for debugging: https://acme-staging-v02.api.letsencrypt.org/directory
  server: 'https://acme-v02.api.letsencrypt.org/directory',
  version: 'draft-12',
  configDir: '~/.config/acme/',
  approveDomains: approveDomains,
  store: require('le-store-certbot').create({
    configDir: join(homedir(), 'acme/etc'),
    webrootPath: '/tmp/acme-challenges'
  })
})

const redir = require('redirect-https')()
require('http').createServer(greenlock.middleware(redir), (req, res) => {
  //require('./app.js')(req, res)
  app(req, res)
}).listen(80)

require('https').createServer(greenlock.tlsOptions, (req, res) => {
  //require('./app.js')(req, res)
  app(req, res)
}).listen(443)
