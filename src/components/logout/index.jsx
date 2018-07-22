import React, { Component, Fragment } from 'react';


const Logout = () => {
  return (<Fragment>
            <div id='logout' className='logout'>
              <style>
                { `
              #logout {
                display: block;
              }

              #logout {
                background: url(https://images.unsplash.com/photo-1421809313281-48f03fa45e9f?auto=format&fit=crop) no-repeat center;
              }

              .outer-contain {
                padding-top: 160px;
              }
              ` }
              </style>
              <div className='container outer-contain'>
                <div className='row'>
                  <div className='col'>
                    <section>
                      <div className='logout-outer'>
                        <div className='logout'>
                          <div className='container'>
                            <div className='row'>
                              <div className='col'>
                                <h3>You're logged out!!</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>);
};

export default Logout;