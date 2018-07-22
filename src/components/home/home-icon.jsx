import React, { Component, Fragment, PureComponent } from 'react';



class HomeIcon extends PureComponent {
  render() {
    return (<section id='home-icons' className='py-5 wow fadeInUp' data-wow-duration="1s" data-wow-delay=".5s">
              <style>
                { `
                .fa {
                  font-size: 55px;
                }
            ` }
              </style>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-4 mb-4 text-center'>
                    <i className='fa fa-cog mb-2'></i>
                    <h3 className='custom-h3'>Turning Gears</h3>
                    <p>Autem aut nemo error unde dolores corporis ea alias id.</p>
                  </div>
                  <div className='col-md-4 mb-4 text-center'>
                    <i className='fa fa-cloud mb-2'></i>
                    <h3 className='custom-h3'>Sending Data</h3>
                    <p>Autem aut nemo error unde dolores corporis ea alias id.</p>
                  </div>
                  <div className='col-md-4 mb-4 text-center'>
                    <i className='fa fa-cart-plus mb-2'></i>
                    <h3 className='custom-h3'>Funding a Project</h3>
                    <p>Autem aut nemo error unde dolores corporis ea alias id.</p>
                  </div>
                </div>
              </div>
            </section>);
  }
}

export default HomeIcon;