import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Block = (props) => (
  <div style={props.style}>
    <FontAwesomeIcon style={props.fa} size="10x" icon={props.icon} />
    <h1 className="display-4" style={props.h1}>
      { props.title }
    </h1>
    <p className="lead">{ props.text }</p>
  </div>
)

export default Block
