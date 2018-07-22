import React, { Component, Fragment } from 'react';

class DashSideNav extends Component {
  render() {
    return (
      <Fragment>
        <style>
          { `
            ul {
              list-style: none;
              color: #989DAC;
              padding: 0;
              margin: 0
          }
          
          hr {
              border: 0;
              background-color: #202228;
              height: 1px;
              margin: 0;
              box-shadow: 1px 1px 2px #393838;
          }

          aside {
            float: left;
            background-color: #27292F;
            overflow: hidden
        }
        
        nav .icon-side ul {box-shadow: 2px 0 8px #000}
        
        nav .icon-side ul li {padding: 20px}
        
        nav .icon-side ul li:hover {
            background-color: #5C9DF5;
            color: #fff!important;
            cursor: pointer    
        }
        
        nav .icon-side ul .select {
            background-color: #191B1E;
            border-left: 3px solid #5C9DF5
        }
        
        nav .icon-side{float: left}
        
            ` }
        </style>
        <aside>
          <nav>
            <section className='icon-side'>
              <ul>
                <li className=''>
                  <a href='/reports'>
                    <i className='fa fa-search fa-2x'></i> Reports
                  </a>
                </li>
                <hr/>
                <li>
                  <a href='/documents'>
                    <i className='fa fa-file fa-2x'></i> Documents
                  </a>
                </li>
                <hr/>
                <li className=''>
                  <a href=''>
                    <i className='fa fa-hospital fa-2x'></i> Reviews
                  </a>
                </li>
                <hr/>
                <li className='select'>
                  <a href=''>
                    <i className='fa fa-user fa-2x'></i> Users
                  </a>
                </li>
                <hr/>
                <li className=''>
                  <a href=''>
                    <i className='fa fa-tasks fa-2x'></i> Messages
                  </a>
                </li>
              </ul>
            </section>
          </nav>
        </aside>
      </Fragment>
    );
  }
}

export default DashSideNav;
