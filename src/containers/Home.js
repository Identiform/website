import React from 'react';

import { Container, Card, CardHeader, CardBody, CardText, CardTitle, Row, Col, Button } from 'reactstrap'

import Head from 'components/Head'
import ContactUs from 'components/ContactUs'
import logo from 'assets/img/logo.svg'

const style = {
  padding: '5%',
  textAlign: 'center'
}

const card = {
  padding: '3%'
}

const h1 = {
  color: 'white'
}

const Home = () => (
  <div>
    <Container>
      <Head title="Home" />
      <div style={style}>
      <img src={logo} width="100%" height="100%" alt="Blockchain Development" />
        <h1 className="display-4" style={h1}>
        Blockchain Development
        </h1>
      </div>
    </Container>
    <Container>
      <div style={style}>
        <h1 className="display-4" style={h1}>
          Services
        </h1>
        <Row>
          <Col sm="4" style={card}>
            <Card>
              <CardHeader tag="h3">Contracts</CardHeader>
              <CardBody>
                <CardTitle>Ethereum Contracts.</CardTitle>
                <CardText>High quality, well tested Ethereum contracts.</CardText>
              </CardBody>
              <a href="https://act.identiform.com">
                <Button color="primary">Example*</Button>
              </a>
              <p>* simplest contract with IPFS data source possible.</p>
            </Card>
          </Col>
          <Col sm="4" style={card}>
            <Card>
              <CardHeader tag="h3">dApps</CardHeader>
              <CardBody>
                <CardTitle>Decentralized, secure web and mobile apps</CardTitle>
                <CardText>Any Ethereum contract also can go with its own decentralized app, which either can go with MetaMask extension (for websites only) or be totally independent.</CardText>
                <a href="https://sales.identiform.com">
                  <Button color="primary">Example sales dApp</Button>
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4" style={card}>
            <Card>
              <CardHeader tag="h3">Architecture</CardHeader>
              <CardBody>
                <CardTitle>Scaling, consulting, deployments</CardTitle>
                <CardText>Scaling solutions, like private side chains, interchanges, IPFS, end-to-end encryption between services, consulting, deployment, all you need.</CardText>
                <a href="https://ipfs.identiform.com">
                  <Button color="primary">Example IPFS dApp</Button>
                </a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
    {/*
    <Container>
      <div style={style}>
        <h1 className="display-4" style={h1}>
          Examples of Work
        </h1>
      </div>
    </Container>
    */}
    <ContactUs />
  </div>
)

export default Home
