import React, { Component, Fragment, PureComponent } from 'react';

import PageHeaderWOLink from '../common/page-header-without-link';
import GalleryThumbs from '../common/gallery-thumbs';
import TwoColumn from '../common/two-column';

const Charities = () => {
  return (<Fragment>
    <div id='charity' className='charity'>
      <PageHeaderWOLink />    <GalleryThumbs /> 
      <TwoColumn/> 
    </div>  
  </Fragment>);
};


export default Charities;