import React from 'react';


import PageHeaderWLinks from '../common/page-header-with-links';

import PressLanding from './press-landing';


const Press = () => {
  return (
    <div className="press">
        <PageHeaderWLinks />
        <div  style={ { textAlign: 'center' } }>
          <h1 className='display-4 hero-tag'>Our Press Office</h1> 
          <PressLanding />
        </div>  
    </div>
    );
}

export default Press;