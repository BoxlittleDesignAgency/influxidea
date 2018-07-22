import React, { Fragment, PureComponent } from 'react';

import DiscoverCards from '../cards/discovery-cards';


class HappeningNow extends PureComponent {
  render() {
    return (<section id='happening' className='py-5'>
              <style>
                { `
                  #happening {
                    background-color: #f8f8f8;
                  }
                ` }
              </style>
              <div className='container'>
                <div className='row mt-4 mb-2'>
                  <div className='col text-center'>
                    <h1 className=''>Happening Now</h1>
                    <p className=''>Check out some charity organisations</p>
                  </div>
                </div>
                <div className="row">
                  <DiscoverCards />
                </div>
              </div>
            </section>);
  }
}

export default HappeningNow;