import React, { Fragment, PureComponent } from 'react';
import InfluxCarousel from './influx-carousel';




class HomeScrolling extends PureComponent {
  render() {
    return (<section id='scrolling' className='container-fluid'>
      <style>
        { `
                  #scrolling {
                    background-color: #f8f8f8;
                  }
                  .carousel-item img {
                    width: 100%;
                    max-height: 40rem!important;
                  }
                  .container-fluid {
                    padding-right: 0!important;
                    padding-left: 0!important;
                  }
                ` }
      </style>
      <InfluxCarousel />
              
    </section>);
  }
}

export default HomeScrolling;