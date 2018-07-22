import React, { Component, Fragment, PureComponent } from 'react';

import { NavbarBrand } from 'reactstrap';


class LogoArea extends PureComponent  {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    try {
      console.log('This is the Logo Area. It mounted successfully');
    } catch (error) {
      console.log('Logo Area Error: ', error);
    }
  }

  doParentToggle = ()=> {
    console.log('the logo was hovered on!!');
  }

  render() {
    return (
      <Fragment>
        <style>
          { `
          ` }
        </style>
        
        <NavbarBrand  
          href="/" 
          className="influx mr-auto"
          onMouseEnter={this.doParentToggle}
        >Influx <span className='navHr'></span>Idea</NavbarBrand>
      </Fragment>
    );
  }  
  
}

export default LogoArea;