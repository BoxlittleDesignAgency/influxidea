import React, { Component, Fragment, PureComponent } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class DashMainContent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isClosed: false,
      toggleSide: true
    };
  }

  doToggleSide = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      toggleSide: !prevState.toggleSide
    }));
  }

  render() {
    return (
      <Fragment>
        <div id='dashboard-main' className='dashboard-main pb-5'>
          <style>
            { `
          .sidebar-wrapper {
            display: -webkit-flex;
            display: flex;
            min-height: 100%;
          }
          .sidebar {
            position: absolute;
            width: 220px;
          }
          .content {
            -webkit-flex: 1;
            flex: 1;
            padding: 0 30px;
            transform: translate3d(0, 0, 0);
            transition: all .3s;
          }
          .content.content-is-open {
            margin-left: 220px;
          }
          .side-panel-toggle {
            cursor: pointer;
            font-size: 42px;
          }
          
          #sidebar-wrapper {
            width: 190px;
            background: #181D21;
            position: fixed;
            height: 100%;
            z-index: 10000;
            left: -110px;
            transition: all .4s ease 0s;
          }
          
          #side-menu {
            margin: 0;
            margin-top: 0px;
            padding: 0;
            background-color: #181D21;
          }
          
          #side-menu li {
            list-style-type: none;
            display: block;
            height: 80px;
            border-top: 1px solid #d3d3d3;
            border-bottom: 1px solid #d3d3d3;
            line-height: 80px;
            padding: 0px 20px;
            transition: all 0.9s ease;
          }
          
          #side-menu li:hover {
            background-color: #E63054;
          }
          
          #side-menu li a {
            text-decoration: none;
            color: #FFF;
            display: block;
            width: 145px;
          }
          
          .sub-icon {
            width: 45px;
            text-align: center;
            color: #fff;
            float: right;
            font-size: 25px;
          }

          .navbar {
            padding: 0px!important;
          }


          
          
            ` }
          </style>
          <div className="sidebar-wrapper">
            <div className="sidebar">
              <ul id="side-menu">
                <li>
                  <a href="">Reminder
                    <span className="sub-icon"><i className="fa fa-dashboard"></i></span>
                  </a>
                </li>
                <li><a href="">Post
                  <span className="sub-icon"><i className="fa fa-edit"></i></span>
                </a>
                </li>
                <li><a href="">Reminder
                  <span className="sub-icon"><i className="fa fa-bell"></i></span>
                </a>
                </li>
                <li><a href="">Setting
                  <span className="sub-icon"><i className="fa fa-cog"></i></span>
                </a>
                </li>
                <li><a href="">Logout
                  <span className="sub-icon"><i className="fa fa-power-off"></i></span>
                </a>
                </li>
              </ul>
            </div>
            <div className="content content-is-open">
              
              <Navbar>
                <span className='side-panel-toggle'>
                  <i className="fa fa-bars mr-4"></i>
                </span>
                <NavbarBrand href='/dashboard'><h1>Dashboard</h1></NavbarBrand>

                <Nav className='ml-auto'>
                  <NavItem className='nav-settings'>
                    <NavLink className='font-icon'><i className='fa fa-tasks'></i></NavLink>
                  </NavItem>
                  <NavItem className='nav-mail'>
                    <NavLink>
                      <i className='fa fa-envelope-o'></i>
                    </NavLink>
                  </NavItem>
                  <NavItem className='nav-calendar'>
                    <NavLink><i className='fa fa-calendar'></i></NavLink>
                  </NavItem>
                  <NavItem className='nav-chat'>
                    <NavLink><i className='fa fa-comments-o'></i></NavLink>
                  </NavItem>
                  <NavItem className='nav-profile'>
                    <NavLink>Jane Smith<i className='fa fa-caret-down'></i></NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
              
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h1>Fancy Toggle Sidebar Navigation</h1>
                    <p>Bacon ipsum dolor sit amet tri-tip shoulder tenderloin shankle. Bresaola tail pancetta ball tip doner meatloaf corned beef. Kevin pastrami tri-tip
                      prosciutto ham hock pork belly bacon pork loin salami pork chop shank corned beef tenderloin meatball cow. Pork bresaola meatloaf tongue, landjaeger
                      tail andouille strip steak tenderloin sausage chicken tri-tip. Pastrami tri-tip kielbasa sausage porchetta pig sirloin boudin rump meatball andouille
                      chuck tenderloin biltong shank </p>
                    <p>Pig meatloaf bresaola, spare ribs venison short loin rump pork loin drumstick jowl meatball brisket. Landjaeger chicken fatback pork loin doner sirloin
                      cow short ribs hamburger shoulder salami pastrami. Pork swine beef ribs t-bone flank filet mignon, ground round tongue. Tri-tip cow turducken shank
                      beef shoulder bresaola tongue flank leberkas ball tip.</p>
                    <p>Filet mignon brisket pancetta fatback short ribs short loin prosciutto jowl turducken biltong kevin pork chop pork beef ribs bresaola. Tongue beef
                      ribs pastrami boudin. Chicken bresaola kielbasa strip steak biltong. Corned beef pork loin cow pig short ribs boudin bacon pork belly chicken andouille.
                      Filet mignon flank turkey tongue. Turkey ball tip kielbasa pastrami flank tri-tip t-bone kevin landjaeger capicola tail fatback pork loin beef jerky.</p>
                    <p>Chicken ham hock shankle, strip steak ground round meatball pork belly jowl pancetta sausage spare ribs. Pork loin cow salami pork belly. Tri-tip pork
                      loin sausage jerky prosciutto t-bone bresaola frankfurter sirloin pork chop ribeye corned beef chuck. Short loin hamburger tenderloin, landjaeger
                      venison porchetta strip steak turducken pancetta beef cow leberkas sausage beef ribs. Shoulder ham jerky kielbasa. Pig doner short loin pork chop.
                      Short ribs frankfurter rump meatloaf.</p>
                    <p>Filet mignon biltong chuck pork belly, corned beef ground round ribeye short loin rump swine. Hamburger drumstick turkey, shank rump biltong pork loin
                      jowl sausage chicken. Rump pork belly fatback ball tip swine doner pig. Salami jerky cow, boudin pork chop sausage tongue andouille turkey.</p>
                  </div>
                </div>
                Name</div>
              <hr />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DashMainContent;
