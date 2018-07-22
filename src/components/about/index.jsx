import React, { Component, Fragment, PureComponent } from 'react';

import AboutMain from './about-main';
import AboutInfo from './about-info';
import PageHeaderWLinks from '../common/page-header-with-links';


const About = () => {
  return (<Fragment>
            <div id='about' className='about'>
              <PageHeaderWLinks />
              <AboutMain />
              <AboutInfo />
            </div>
          </Fragment>);
};

export default About;