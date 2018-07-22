import React, { Component, Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';


class SideNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    try {
      console.log('SideNav mounted successfully');
    } catch (error) {
      console.log('SideNav encountered some errors');
    }
  }

  render() {
    const { closeNav } = this.props;
    return (
      <div id='myNav' className='dash-overlay py-5 my-5'>
        <style>
          { `
                  
      ` }
        </style>
        <a className='closeBtn' onClick={ () => closeNav() }>×</a>
        <div className='dash-overlay-content'>
          <a href=''>Vitamin Juice</a>
          <a href=''>Clothing</a>
          <a href=''>Supplements</a>
          <a href=''>Contact</a>
        </div>
      </div>
    );
  }
}


SideNav.propTypes = {
  closeNav: PropTypes.func
};


export default SideNav;
