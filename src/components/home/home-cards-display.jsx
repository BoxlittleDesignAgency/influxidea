import React, { Fragment, Component } from 'react';

import IdeaCardsBucket from '../cards/idea-cards-bucket';

const HomeCardsDisplay = () => {
  return (<section id='home-cards-display' className='p-2'>
  <style>
    {
      `
      #home-cards-display {
        background-color: #2d3a4a;
        position: relative;
        display: block;
        overflow: hidden;
      }
      `
    }
    </style>
          <div className='dark-underlay'>
              <div className='row'>
                <div className='col'>
                  <div className='container pt-5'>
                    <IdeaCardsBucket />
                  </div>
                </div>
              </div>
            </div>
          </section>);
}

export default HomeCardsDisplay;