import React, { Component, Fragment, PureComponent } from 'react';
import DashSideNav from './layout/dash-side-nav';
import DashHeader from './layout/dash-header';
import DashBoardNav from './layout/dash-board-nav';
import DashMainContent from './layout/dash-main-content';

import SideNav from './layout/side-nav';


class Dashboard extends Component {
  openNav = () => {

    document.getElementById('myNav').style.width = '100%';
  }

  closeNav = () => {
    document.getElementById('myNav').style.width = '0%';
  }

  render() {
    return (<Fragment>
      <style>
        { `
          #dashboard {
            padding-top: 120px;
            // background-color:#21264B;
            background-color:#232d37;
          }          
      ` }
      </style>
      <div id='dashboard' className='dashboard'>
        <div className='container'>
          
          <section>
            {/* <a className='openBtn' onClick={ this.openNav }>open</a> 
                <SideNav closeNav={this.closeNav}/>  */}
            <DashMainContent/>
          </section>
            
        </div>
      </div>
    </Fragment>);
  }
}

export default Dashboard;