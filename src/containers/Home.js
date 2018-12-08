import React from 'react';

import { Container, Button } from 'reactstrap'

import Async from 'components/Async'
import Head from 'components/Head'
import logo from 'assets/img/logo.svg'
const Section = Async(() => import('components/Section'))

const style = {
  padding: '10%',
  textAlign: 'center'
}

const h1 = {
  color: 'white'
}

const Home = () => (
  <div>
    <Container>
      <Head title="Home" />
      <div style={style}>
      <img src={logo} width="100%" height="100%" alt="identiForm Decentralized KYC" />
        <h1 className="display-4" style={h1}>
        Register with identiForm and receive free tokens*
        </h1>
        <p style={h1}>* Currently only demo tokens.</p>
        <a href={`${process.env.REACT_APP_SALES_URL}/get`}>
          <Button color="primary">
            Participate in pre-sale
          </Button>
        </a>
      </div>
      <Section />
    </Container>
  </div>
)

export default Home
