import React, { Fragment, Component, PureComponent } from 'react';

class HomeHeading extends PureComponent {
  render() {
    return (<section id='home-heading' className='px-5 mb-4'>
      <style>
        { `
      #home-heading {
        position: relative;
        min-height: 18em; 
        background: url('https://www.cdc.gov/wcms/3.0/cdcwp/gadgets/images/kitchen_adventurer_caramel.jpg');
        background-attachment: fixed;
        background-color: #000;
        text-align: center;
        color: #fff;

      }
      ` }
      </style>
      <div className='dark-overlay'>
        <div className='row'>
          <div className='col'>
            <div className='container pt-5'>
              <h1>Are you ready to get started?</h1>
              <p className='.d-sm-none .d-md-block'>Enim sit quos est deserunt sint. Ullam sint eos perferendis. Nisi voluptatum animi qui et et corporis architecto. Eius officia et dolorem enim et officia
                        officia. Quo sequi cupiditate dicta et. Similique reprehenderit eos est explicabo eveniet sed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}
export default HomeHeading;