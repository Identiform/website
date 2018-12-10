import React, { PureComponent } from 'react'
import { Button, Form, Input, Label, Col, Row } from 'reactstrap'
import { post } from 'axios'

const apiUrl = `http://localhost:${process.env.REACT_APP_API_PORT}`

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
      email: '',
      name: '',
      msg: '',
      error: undefined
    }
    this.mounted = false
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillUnmount = () => {
    this.mounted = false
  }

  componentWillMount = () => {
    this.mounted = true
  }

  handleChange = (event) => {
    const { target, option } = event
    const { value, name } = target

    if (this.mounted) {
      (option) ? this.setState({
        [name]: option.value ? option.value : ''
      }) : this.setState({
        [name]: value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const name = this.state.name
    const msg = this.state.msg
    const email = this.state.email
    if (name.length >= 0 && msg.length >= 0 && email.indexOf('@')  > -1) {
      post(`${apiUrl}/contactus`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, msg: msg, name: name })
      }).then((res) => {
        if (res.data.status === 'sent') {
          this.setState({ sent: true })
        } else {
          this.setState({ sent: false, error: 'Some error sending email.' })
        }
      }).catch((error) => {
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
              { this.state.error ? this.state.error : `Thank you, email is sent, we will answer you as soon as possible.` }
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
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Label for="name" sm={3}>Your Name:</Label>
              <Input type="name" name="name" id='name' onChange={this.handleChange} />
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Label for="email" sm={3}>Email:</Label>
              <Input type="email" name="email" placeholder='meil@dot.com' id='email' onChange={this.handleChange} />
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Label for="msg" sm={3}>Message:</Label>
              <Input type="textarea" name="msg" id="msg" onChange={this.handleChange} />
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
          <Button color="primary" style={button}>Submit</Button>
        </Form>
        : errors }
        { this.state.error ? this.state.error : null }
      </div>
    )
  }
}
