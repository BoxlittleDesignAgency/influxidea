import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const TermsAndCondition = () => {
  return (<div className='terms'>
            <style>
              { `
      
      ` }
            </style>
            <hr />
            <div className='influx-tc text-small mb-4'>
              <div className='row'>
                <div className='col-sm-6 offset-sm-3 col-md-6 offset-md-3'>
                  <Nav justified>
                    <div className='nav-link'>
                      <Link to='/terms'>Terms of service</Link>
                    </div>
                    <div className='nav-link'>
                      <Link to='/privacy'>Privacy</Link>
                    </div>
                    <div className='nav-link'><Link to='/accessible'>Accessibility</Link></div>
                    <div className='nav-link' disabled>Sitemap</div>
                  </Nav>
                </div>
              </div>
            </div>
          </div>);
}

export default TermsAndCondition;