import React from 'react'
import { connect } from 'react-redux'

import { Box, Heading, Paragraph } from 'grommet'

const NoMatch = (props) => (
  <Box>
    <Heading>Not Found</Heading>
    <Paragraph>Sorry, this page doesn't exist.</Paragraph>
  </Box>
)

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(NoMatch)
