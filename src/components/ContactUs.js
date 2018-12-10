import React, { PureComponent } from 'react'
import { Button, Form, Input, Label, Col, Row } from 'reactstrap'

const style = {
  padding: '10%',
  background: 'white',
  textAlign: 'center'
}

const button = {
  margin: '1%'
}

export default class ContactUs extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      sent: false,
      email: null,
      name: null,
      msg: null,
      error: undefined
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const name = this.state.name
    const msg = this.state.msg
    const email = this.state.email
    if (typeof name === 'string' && typeof msg === 'string' && typeof email === 'string') {
      fetch('/contactus', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, msg: msg, name: name })
      }).then((response) => response.json()).then((json) => {
        if (json.success) {
          this.setState({ sent: true })
        } else {
          this.setState({ sent: false, error: 'Some error sending email.' })
        }
      }).catch((error) => {
        console.error(error)
        this.setState({ error:  error.message })
      })
    } else {
      this.setState({ error: 'Not all required information entered.' })
    }
  }

  render() {
    const errors = (
      <Row>
          <Col sm={4}>
          </Col>
          <Col sm={4}>
            <h1 className="display-4">
              { this.state.error ? this.state.error :  `Thank you, email is sent, we will answer you as soon as possible.` }
            </h1>
          </Col>
          <Col sm={4}>
          </Col>
        </Row>
    )

    return (
      <div style={style}>
        <h1 className="display-4">
          Contact Us
        </h1>
        { !this.state.sent ?
        <Form action={this.handleSubmit}>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Label for="name" sm={3}>Your Name:</Label>
              <Input type="name" name="name" value={this.state.name} id='name' />
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Label for="email" sm={3}>Email:</Label>
              <Input type="email" name="email" value={this.state.email} placeholder='meil@dot.com' id='email' />
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Label for="msg" sm={3}>Message:</Label>
              <Input type="textarea" name="msg" id="msg" value={this.state.msg} />
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
          <Button color="primary" style={button}>Submit</Button>
        </Form>
        : errors }
      </div>
    )
  }
}
