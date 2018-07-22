import React from 'react';

import { Button, Row, Col } from 'reactstrap';



const StartFundOther = () => {
  return (<div id='start-other' className='start-other my-2 py-2'>
            <style>
              { `
              #start-other {
                
              }
        #feature-two {
          padding:5% 0;
          background-color: #f8f8f8;
       }

      .cta-fund {
        text-transform: uppercase;
        font-weight: 600;
        letter-spaceing: -0.4em!important;
        word-spacing: -2px;
      }

      .cta-fund-tag {
        font-size: 2.2em;
        color: #ccc;
        letter-spacing: 0.1em;
      }
      
        ` }
            </style>
            <section style={{borderTop: '20px solid #f8f8f8'}}>
              <div className='container my-5'>
                <div className='row text-center'>
                  <div className='col'>
                    <h1 className='cta-fund display-3'>Let's get to work</h1>
                    <h3 className='cta-fund-tag p-2 my-2'>Start here...</h3>
                  </div>
                </div>
              </div>
            </section>
            <section id='feature-two'>
              <div className='container'>
                <div className='row'>
                  <div className='col'>
                    <h1 className='text-center'>
                                                Ready to get started?
                                              </h1>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3 offset-md-2'>
                    <Button className='frs-btn my-4'>Start fundraising</Button>
                    <h4 className=''>Donations will go to the charity</h4>
                  </div>
                  <div className='col-md-2'>
                    <h3 className='text-center py-3 my-4'>or</h3>
                  </div>
                  <div className='col-md-3'>
                    <Button className='crs-btn my-4'>Start Crowdfunding</Button>
                    <h4 className=''>Donations will go to the you
                                </h4>
                  </div>
                </div>
              </div>
            </section>
          </div>);
}

export default StartFundOther;