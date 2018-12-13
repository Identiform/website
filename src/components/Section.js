import React from 'react';

import { Container } from 'reactstrap'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faRetweetalt } from '@fortawesome/fontawesome-free-solid'

import Async from 'components/Async'
const Block = Async(() => import('components/Block'))

const style = {
  padding: '10%',
  background: 'white',
  textAlign: 'center'
}

const h1 = {
  textAlign: 'center'
}

const fa = {
  padding: '20px'
}

const Section = () => (
  <div>
    <Container>
      <Block
        fa={fa}
        h1={h1}
        style={style}
        icon={faBitcoin}
        title='Register once, enjoy all the benefits'
        text='Receive 1000 IDF tokens for free and get paid for participating in ICOs and airdrops.' />
      <Block
        fa={fa}
        h1={h1}
        style={style}
        icon={faRetweetalt}
        title='Referrals'
        text='After registration as an user, you can sign as a referral with one click and earn for each referred user.' />
      <Block
        fa={fa}
        h1={h1}
        style={style}
        icon={faRetweetalt}
        title='ICO Companies'
        text='Do an ICO or airdrop with one click through our platform, get listed in our directories, incentivize your users based on their reputation and securely do business with them.' />
    </Container>
  </div>
)

export default Section
