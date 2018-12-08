import React from 'react';

import { Container } from 'reactstrap'

import Head from 'components/Head'

const div = {
  textAlign: 'center',
  padding: '10%',
  background: 'white'
}

const Partners = () => (
  <div>
    <Head title="Partnershio" />
    <Container>
      <div style={div}>
        <h1 className="display-4">Partner Opps</h1>
        <p className="lead">
        identiForm is decentralized, secure and incentivized KYC/ AML platform for ICOs. Register 
        as a company and get a KYC service along with a listing in our catalog.
        </p>
        <p className="lead">
        For partnership opportunities write info@identiform.com
        </p>
      </div>
    </Container>
  </div>
)

export default Partners
