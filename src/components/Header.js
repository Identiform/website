import React, { PureComponent } from 'react'

import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

import logo from 'assets/img/cube.svg'

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
          <img src={logo} width="70%" height="100%" alt="identiForm Decentralized KYC" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar style={style}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/Identiform">
                  <FontAwesomeIcon style={style} icon={faGithub} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/identiform/">
                  <FontAwesomeIcon style={style} icon={faFacebook} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`${process.env.REACT_APP_APP_URL}/account`} style={style}>
                  My Account
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`${process.env.REACT_APP_APP_URL}/manager_register`} style={style}>
                  Service
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`${process.env.REACT_APP_APP_URL}/referral_register`} style={style}>
                  Referrals
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/partners" style={style}>
                  Partnership
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={style}>
                  Directory
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href={`${process.env.REACT_APP_APP_URL}/icos`}>
                      ICOs
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href={`${process.env.REACT_APP_APP_URL}/airdrops`}>
                      Airdrops
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href={`${process.env.REACT_APP_APP_URL}/users`}>
                      Reputations
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={style}>
                  Token
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href={`${process.env.REACT_APP_SALES_URL}/market_info`}>
                      Market Info
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href={`${process.env.REACT_APP_SALES_URL}/get`}>
                      Pre-sale (MainNet)
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href={`${process.env.REACT_APP_APP_URL}/transfer`}>
                      Transfer (MainNet)
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
      )
  }
}

export default Header
