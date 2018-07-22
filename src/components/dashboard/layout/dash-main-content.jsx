import React, { Component, Fragment, PureComponent } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import Media from 'react-media';

class DashMainContent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isClosed: false,
      toggled: true
    };
  }

  doToggle = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      toggled: !prevState.toggled
    }));
  }

  render() {
    return (
      <Fragment>
        <div id='dashboard-main' className='dashboard-main mb-5'>
          <style>
            { `
              #dashboard-main {
                
              }
              
              .wrapper {
                display: -webkit-flex;
                display: flex;
                min-height: 100%;
              }
              
              .sidebar {
                position: absolute;
                width: 220px;
                min-height: 100%;
              }

              .baba {
                padding-left: 0px;
                padding-right: 0px;
              }

              #sidenav {
                height:100%;
                background-color:#35495d;
              }

              .navbar {
                padding: 0px!important;
              }

              #sidenav-header {
                height:100px;
                line-height:60px;
                width:100%;
                background-color:#0f92d1;
                padding:20px 20px 20px 90px;  
              }
              
              
              #profile-picture {
                //height:60px;
                width:60px;
                background-color:white;
                display:block;
                position:absolute;
                top:20px;
                left:6px;
                border-radius: 30px;
                overflow:hidden;
                box-shadow:0 0 0 2px rgba(255,255,255,.4);
              }
              
              #profile-picture img {
                width:100%;
                height:100%;
              }
              
              #profile-link {
                color:white;
              }

              #main-nav {
                list-style-type:none;
                padding:0;
                margin:0;
                width: 100%;
              }
              
              #main-nav li {
                padding:0;
                margin:0;
              }
              
              #main-nav li a {
                display:block;
                padding:0 20px 0 80px;
                text-decoration:none;
                color:#98cde6;
                position:relative;
                text-transform:uppercase;
                font-weight:200;
                line-height:65px;
              }
              
              #main-nav li a:hover {
                color:white;
              }
              
              #main-nav li.active a {
                background:rgba(0,0,0,.2);
                color:white;
                box-shadow:inset 5px 0 0 #ef8700;
              }
              
              #main-nav li a .fa {
                font-size:30px;
                position:absolute;
                // width:60px;
                // height:65px;
                line-height:65px;
                text-align:center;
                left:20px;
              }
              
              #main-nav li.active a .fa {
                color:#98cde6;
              }
              
              @media all and (max-width:900px){
              .open-menu {
                  overflow-x:hidden;
                  overflow-y:scroll;
              }

              #menu-overlay {
                height:100%;
                position:fixed;
                top:0;
                right:0;
                left:100%;
                background:transparent;
                z-index:8;
              }

              .open-menu #menu-overlay {
                left:280px;
                background:rgba(255,255,255,.9);
              }

            }

            .content {
                -webkit-flex: 1;
                flex: 1;
                background: #232d37;
                transform: translate3d(0,0,0);
                transition: all .3s;
                position: relative;
                margin-left: 86px;
              }
              
              .content.content-is-open {
                margin-left: 220px;
              }

              .content-head {
                background-color: #fff;
              }

              .content-body {
                background-color: #fff;
              }
              

              .side-panel-toggle {
                cursor: pointer;
                font-size: 42px;
                padding: 20px;
                z-index: 900;
              }
              
              .side-menu {
                background-color: #0f92d1;
                color: #fff;
                position: absolute;
                top: 0px;
                left: -15px;
                width: 90px;
                height: 100px;
                border-bottom-right-radius: 50%;
                cursor: pointer;
                transition: all 1s cubic-bezier(0.5, -0.75, 0.05, 1), background-color 1s ease;
              }

              #account-actions {
                padding-left:25px;
                height:65px;
              }
              
              #account-actions a {
                display:block;
                position:relative;
                height:40px;
                line-height:40px;
                text-align:center;
                font-size:20px;
                color:#b0b0b0;
                width:40px;
                float:left;
                overflow:visible;
              }
              
              #messages:before {
                content:attr(data-newmessages);
                display:block;
                height:14px;
                width:14px;
                line-height:16px;
                border-radius:14px;
                position:absolute;
                right:-2px;
                font-size:10px;
                text-align:center;
                font-weight:200;
                color:white;
                background:#ef8700;
              }

              #account-actions a:hover {
                color:#ef8700;
              }

              .nav-item {
                position: relative;
              }
            
              .nav-item a:after {
                content:attr(data-title);
                display: block;
                width: 100px;
                height: 0px;
                text-align: center;
                position: absolute;
                left: -16px;
                font-size: 12px;
                bottom: 4px;
                opacity:0;
                -webkit-transition:.25s ease-in-out;
              }
              
              
              .nav-item a:hover:after {
                opacity:1;
                bottom: 4px;
              }

              #admin-search {
                position:absolute;
                height:99px;
                line-height:100px;
                right:20px;
                top:0;
                text-align:right;
                z-index:0;
              }
              
              #search-label {
                display:block;
                position:absolute;
                text-align:center;
                line-height:40px;
                width:40px;
                height:40px;
                left:-40px;
                top:10px;
                color:#b0b0b0;
                font-size:20px;
                cursor:pointer;
                background:transparent;
              }
              
              #search-label:hover {
                color:#0f92d1;
              }
              
              #search-field {
                display:inline-block;
                height:60px;
                font-size:18px;
                width:0;
                border:none;
                outline:none;
                opacity:0;
                background:transparent;
              }
              
              #search-field:focus {
                width:200px;
                opacity:1;
              }
              
              #search-field:focus+label {
                color:#ef8700;
              }
    
              
            ` }
          </style>
          <section className={ this.state.toggled ? 'wrapper open-menu' : 'wrapper' }>
            <div className='container'>
              <div className='row'>
                <Media query={ { maxWidth: 900 } }>
                  { matches => matches && (<div id="menu-overlay"></div>) }
                </Media>

                <div className="sidebar">
                  <Navbar id='sidenav'>
                    <div id="sidenav-header">
                      <div id="profile-picture">
                        <img src="http://www.gravatar.com/avatar/fa4df8540bab3cb38f7dfa60c6e0522c.png" />
                      </div>
                      <NavbarBrand href="#" id="profile-link">Jesse Couch</NavbarBrand>
                    </div>
                    <Nav id='main-nav' className='mb-4' vertical>
                      <NavItem className='active'>
                        <NavLink href='#'><i className='fa fa-tachometer'></i>Dashboard</NavLink>
                      </NavItem>
                      <NavItem className=''>
                        <NavLink href='#'><i className='fa fa-check-square-o'></i>Tasks</NavLink>
                      </NavItem>
                      <NavItem className=''>
                        <NavLink href='#'><i className='fa fa-user'></i>Contacts</NavLink>
                      </NavItem>
                      <NavItem className=''>
                        <NavLink href='#'><i className='fa fa-calendar'></i>Calendar</NavLink>
                      </NavItem>
                      <NavItem className=''>
                        <NavLink href='#'><i className='fa fa-cog'></i>Settings</NavLink>
                      </NavItem>
                      <NavItem className=''>
                        <NavLink href='#'><i className='fa fa-life-ring'></i>FAQs</NavLink>
                      </NavItem>
                      <NavItem className=''>
                        <NavLink href='#'><i className='fa fa-power-off'></i>Logout</NavLink>
                      </NavItem>
                    </Nav>
                  </Navbar>
                </div>
                
                <div className={ this.state.toggled ? 'content content-is-open' : 'content' }>
                  <div className='side-menu side-panel-toggle' onClick={ this.doToggle }>
                    <i className="fa fa-bars"></i>
                  </div>
                  <div className='row content-head mb-2'>
                    <Navbar className=''>
                      <Nav id='account-actions' className=' mx-auto'>
                        <NavItem className='nav-home'>
                          <NavLink className='font-icon' data-title='Home'><i className='fa fa-home'></i></NavLink>
                        </NavItem>
                        <NavItem className='nav-settings'>
                          <NavLink className='font-icon' data-title='Settings'><i className='fa fa-cog'></i></NavLink>
                        </NavItem>
                        <NavItem className='nav-mail'>
                          <NavLink id='messages' data-newmessages='3' data-title='Messages'>
                            <i className='fa fa-envelope-o'></i>
                          </NavLink>
                        </NavItem>
                        <NavItem className='nav-calendar'>
                          <NavLink data-title='Calendar'><i className='fa fa-calendar'></i></NavLink>
                        </NavItem>
                        <NavItem className='nav-chat'>
                          <NavLink data-title='Chat'><i className='fa fa-comments-o'></i></NavLink>
                        </NavItem>
                      </Nav>
                      <Nav className='ml-4'>
                        <NavLink href="#">
                          <form id="admin-search">
                            <input type="text" id="search-field" placeholder="Search" />
                            <label htmlFor="search-field" id="search-label" title="Search"><i className="fa fa-search"></i></label>
                          </form>
                        </NavLink>
                      </Nav>
                          
                    </Navbar> 
                  </div>
                  <div className="row content-body my-4 px-4">
                    <div className="col-lg-12">
                      <h1 className='text-center'>Fancy Toggle Sidebar Navigation</h1>
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

                </div>
              </div>
            </div>
          </section>
          <section>
            <h2>documentation</h2>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default DashMainContent;
