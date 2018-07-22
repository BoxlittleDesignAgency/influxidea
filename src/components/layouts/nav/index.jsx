import React, { Component, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink as BootLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import LogoArea from '../logo-area/index';


class InfluxNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      dropdownOpen: false,
      logoToggle: true
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }


  doToggleLogo = (event) => {
    this.setState((prevState) => ({ logoToggle: !prevState.logoToggle }));
    console.log(this.state.logoToggle);
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Fragment>
        <style>
          { `
          .dropdown-menu {
              top: 26px!important;
          }
          button.dropdown-item {
            font-size: 1em!important;
          }
          .nav-link {
            color: #000;
            letter-spacing: 0.1em;
          }
          a:hover {
            color: $off-red!important;
          }
          
          ` }
        </style>
        <Navbar color="" dark role='navigation'>
          <div className='container'>
            <LogoArea parentToggleLogo={this.doToggleLogo} />
            <Nav className='ml-auto'>
              <h3 className='influx-Nv-Lk'><BootLink href='/login'>Login</BootLink></h3>
              <h3 className='influx-Nv-Lk'><BootLink href='/signup'>Sign up</BootLink></h3>

              <Dropdown className='mr-5 pr-4' isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
                <DropdownToggle tag="span" onClick={ this.toggle } data-toggle="dropdown" aria-expanded={ this.state.dropdownOpen }>
                  <NavbarToggler onClick={ this.toggleNavbar } className="mr-2" /><span className='menu d-none d-sm-inline-block'>Menu</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>Navigation</DropdownItem>
                  <DropdownItem>
                    <BootLink href="/about">About us</BootLink>
                  </DropdownItem>
                  <DropdownItem>
                    <BootLink href="/help">Help</BootLink>
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>
                    <BootLink href="/start-funding">Start Fundraising</BootLink>
                  </DropdownItem>
                  <DropdownItem>
                    <BootLink href="/ideas"> For Ideas/Innovations</BootLink>
                  </DropdownItem>
                  <DropdownItem>
                    <BootLink href="/charities"> For Charities</BootLink>
                  </DropdownItem>
                  <DropdownItem>
                    <BootLink href="/companies"> For Companies</BootLink>
                  </DropdownItem>
                  <DropdownItem>
                    <BootLink href="/epartners">For Investors</BootLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>  
          </div>
        </Navbar>
      </Fragment>
    );
  }
}

InfluxNav.propTypes = {
  dark: PropTypes.bool,
  fixed: PropTypes.string
};

export default InfluxNav;


