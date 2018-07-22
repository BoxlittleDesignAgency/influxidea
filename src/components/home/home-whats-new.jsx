import React, { Component, Fragment, PureComponent } from 'react';



class WhatsNew extends PureComponent {
  render() {
    return (
      <section className="whats-new py-3">
        <style>
          { `

            .whats-new
            {
              margin-top:40px;
            }


            .whats-new-text
            {
              padding-top:3%;
              padding-bottom:3%;
            }

            .hero-btn {
              margin: 0 auto!important;
            }
        ` }
        </style>
        <div className='container'>
          <div className='row'>
            <div className="col-md-6 floater mt-2 pt-2">
              <img src='https://41.media.tumblr.com/3dde93f097de5e9db4f11b67729d6a2e/tumblr_na06dk1vWM1tubinno1_1280.jpg' className='img-fluid' />
            </div>
            <div className="col-md-6 text-center whats-new-text">
              <h1 className='custom-h'> Are You Paying for Results You Don't Like? </h1>
              <div>
                <p className="paragraphs"> Influxidea gives you access to a worldwide network of experts, thought leaders and industry veterans. By getting access to these brilliant minds outside of your company, you will be able to solve technical problems, break development bottlenecks and find technologies faster and more efficiently than your competition. Find out how Influxidea can accelerate your innovation today.</p>
              </div>
            </div>
          </div>
          <div className='row my-5'>
            <div className='col  mx-auto text-center'>
              <div className='hero-btn animated zoomIn'>
                <a className='hero-btn-color hero-btn-spacing'>Start Fundraising</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
  }
}

export default WhatsNew;