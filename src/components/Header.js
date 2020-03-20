import React, { PureComponent } from 'react'

import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

import logo from '../assets/img/cube.svg'

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const style = {
      color: 'white'
    }

    return (
      <Container>
        <Navbar light expand="md" fixed="true" color="faded">
          <NavbarBrand href="/">
          <img src={logo} width="70%" height="100%" alt="identiForm Blockchain Development" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar style={style}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/TalaikisInc">
                  <FontAwesomeIcon style={style} icon={faGithub} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/identiform/">
                  <FontAwesomeIcon style={style} icon={faFacebook} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
      )
  }
}

export default Header
