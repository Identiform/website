import { strictEqual } from 'assert'

import { config } from '../config'
import { request } from '../utils'

strictEqual(typeof config.mailgun.domainName, 'string')
strictEqual(typeof config.mailgun.apiKey, 'string')
strictEqual(typeof config.mailgun.emailTo, 'string')

const sendMailgunEmail = (email, subject, msg, callback) => {
  const validemail = typeof email === 'string' && email.indexOf('@') > -1 ? email : false
  const validMsg = typeof msg === 'string' && msg.trim().length > 0 ? msg.trim() : false

  if (validemail && validMsg) {
    const htmlMsg = `<br /><h3>${subject}</h3><p>${msg}</p>`

    const obj = {
      protocol: 'https:',
      hostname: 'api.mailgun.net',
      method: 'POST',
      path: `/v3/${config.mailgun.domainName}/messages`,
      auth: `api:${config.mailgun.apiKey}`,
      data: {
        from: email,
        to: config.mailgun.emailTo,
        subject: subject,
        text: msg,
        html: htmlMsg
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    request('https', obj, (err) => {
      if (!err) {
        callback(false)
      } else {
        callback(err)
      }
    })
  } else {
    callback({ error: 'Send email parameters missing or are invalid.' })
  }
}

export {
  sendMailgunEmail
}
