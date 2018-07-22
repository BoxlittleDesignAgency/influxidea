import React, { Component, Fragment, PureComponent } from 'react';

import InfluxNav from '../nav/index';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
            
    };
  }

  render() {
    return (
      <div id='header' className='header fixed-top'>
        <InfluxNav />
      </div>
    );
  }
}

export default Header;