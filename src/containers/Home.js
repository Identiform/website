import React from 'react';

import { Container, Card, CardHeader, CardBody, CardText, CardTitle, Row, Col, Button } from 'reactstrap'

import ContactUs from '../components/ContactUs'
import logo from '../assets/img/logo.svg'
import Head from '../components/Head'

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
                <CardText>We develop high quality, well tested Ethereum contracts.</CardText>
              </CardBody>
              <a href="https://act.talaikis.com">
                <Button color="primary">Example*</Button>
              </a>
              <p>* the simplest as possible contract with IPFS data source.</p>
            </Card>
          </Col>
          <Col sm="4" style={card}>
            <Card>
              <CardHeader tag="h3">dApps</CardHeader>
              <CardBody>
                <CardTitle>Decentralized, secure web and mobile apps</CardTitle>
                <CardText>Any Ethereum contract also can go with its own app, which either can be used with MetaMask extension (for websites only) or be totally independent from third parties.</CardText>
                <a href="https://sales.talaikis.com">
                  <Button color="primary">Example sales dApp w. Metamask</Button>
                </a>
                <br />
                <br />
                <a href="https://trueteslatechnologies.io/">
                  <Button color="primary">Example serverless ICO dApp w/o Metamask</Button>
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4" style={card}>
            <Card>
              <CardHeader tag="h3">Architectures</CardHeader>
              <CardBody>
                <CardTitle>Scaling, consulting, deployments</CardTitle>
                <CardText>Scaling solutions, like private side chains, interexchanges, collection of ICO funds via other blockhains, IPFS, end-to-end encryption between services, APIs, other blockchains or fiat, mobile apps, consulting, deployment, all you need.</CardText>
                <a href="https://ipfs.talaikis.com">
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
