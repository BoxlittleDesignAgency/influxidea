import React, { Component, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';


const linksCat = [
  {
    name: 'For Charities',
    url: '/charities'
  },
  {
    name: 'For Companies',
    url: '/companies'
  },
  {
    name: 'For Event Partners',
    url: '/epartners'
  }
];

const PageHeaderWOLink = () => {
  const linksCompBlue = linksCat.map((link, index) => {
    return (
      <NavItem key={ index }>
        <div className='nav-link'>
          <Link className={ "links" } to={ link.url }>
          { link.name }
          </Link>
        </div>
      </NavItem>
      );
  });
  return (<header id='page-header-wo-link' className='page-header-wo-link  text-center'>
            <div className='container'>
              <div className='sub-nav-blue'>
                <div className='atom container'>
                  <div className='row'>
                    <Nav className='navigation'>
                      { linksCompBlue }
                    </Nav>
                  </div>
                </div>
              </div>
            </div>
        </header>);
}

export default PageHeaderWOLink;