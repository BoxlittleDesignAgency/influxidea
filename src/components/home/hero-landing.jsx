import React, { Component, Fragment } from 'react';


const HeroLanding = () => {
  return (<div id="hero" className="hero-container animated zoomIn">
            <style>
              { `

            #hero {
              padding: 2.1em 0;
              margin-top: 120px;
            }
              
                        
            ` }
            </style>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <section className='sec-main mb-5'>
                    <div className='s_inner text-center py-6'>
                    <div className='hero-grp animated zoomIn'>
                      <h1 className='display-3 hero-tag white-bg'> Turning ideas into reality</h1>
                      <h3 className='tag-line mb-4 white-bg'>Join over <span>1 million people</span> supporting charity and personal causes</h3>
                      </div>
                      
                    </div>
                  
                  </section>
                </div>
              </div>
            </div>
          </div>);
}

export default HeroLanding;