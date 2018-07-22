import React, { Component, Fragment, PureComponent } from 'react';

import PageHeaderWOLink from '../common/page-header-without-link';

const EPartners = () => {
  return (<Fragment>
    <div id='ePartners' className='ePartners'>
      <style>
        { `
                #ePartners {
                 }

                 .epartners-h3 {
                   font-size: 1.95em;
                   font-weight: 400;
                   letter-spacing: 0.08em
                 }

                 .promote-event {
                   background-color: #f5f5f5;
                   display: block;
                 }
                 
                 .become-epartner {
                   background-color: #ccc;
                   background-image:url('https://40.media.tumblr.com/e67b59d43c79c496b6fa8f1dddabef47/tumblr_nbc7zx6vJl1tubinno1_1280.jpg');
                   background-position: center;
                   background-repeat: no-repeat;
                   background-size: cover;
                   display: block;
                   height: auto;
                 }
      ` }
      </style>
      <PageHeaderWOLink />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <section>
              <div className='s_inner text-center py-6'>
                <h1 className='display-3 hero-tag'>Become an Investor.</h1>
                <h3>A smarter way to Invest.</h3>
                <p className='mx-auto'> Nisi aut tenetur et nisi aut. Ipsam neque magnam cumque eaque nobis a. Rem voluptatem porro amet aut. Omnis sit molestiae adipisci quia necessitatibus
                          eum reiciendis dolore. Et rerum ea repudiandae fugiat cumque. Libero rerum doloribus. Numquam suscipit quia. Tempore ratione quos corrupti quas ut
                          cumque et. Optio enim delectus consectetur quidem nobis illum omnis eveniet. Nobis pariatur est architecto consequatur et illum.
                </p>
                <button className='button_universal btn btn-danger'>Sign up</button>
              </div>
            </section>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <h3 className='epartners-h3 p-4 m-4'>
                                                            A shopping experience focused on all your projects.
            </h3>
          </div>
          <div className='col-md-6'>
            <p className='p-4 m-4'>
                      InfluxIdea introduces an environment where you can focus on the realization of your impeding projects. With a diverse range anfd high-quality materials, our offering
                      allows you to enjoy a simple and stress-free shopping experience. Discover our in-house fundraisers accompanied by one of our advisors.
            </p>
          </div>
        </div>
        <div className='text-center'>
          <h3 className='mx-auto'>Why partner with InfluxIdea?</h3>
        </div>
        <div className='row'>
          <div id='epartner-1' className='col-md-4'>
            <h4>Get more participants</h4>
            <p>Join our community of 22 million people, 20,122 charities and 1,000 companies. Reach a bigger audience and raise more for charity.</p>
          </div>
          <div id='epartner-2' className='col-md-4'>
            <h4>Make registration simple</h4>
            <p>Weve integrated with all the top registration platforms so your participants can register online and create a Fundraising Page in one simple step.</p>
          </div>
          <div id='epartner-3' className='col-md-4'>
            <h4>World-class technology</h4>
            <p>Our continued investment and innovation means you get a lightning fast and reliable platform with market leading conversion rates</p>
          </div>
          <div className='text-center  mx-auto'>
            <button className='button_universal btn btn-danger'>Sign up</button>
          </div>
        </div>
      </div>
      <div className='promote-event container-fluid  mt-4 pt-4'>
        <div className='container'>
          <div className='text-center'>
            <h3 className=''>Why promote fundraising as part of your event?</h3>
          </div>
          <div className='row py-4'>
            <div className='col-md-4 text-center'>
              <h3>Reach more</h3>
              <p>Strengthen your relationship with charities and their network of supporters and partners. Add your event to our database so participants can find you
                        easily</p>
            </div>
            <div className='col-md-4 text-center'>
              <h3>Get more participants</h3>
              <p>One in three fundraisers inspire their friends to start fundraising too, and 62% of them choose to take part in the same event as the original fundraiser</p>
            </div>
            <div className='col-md-4 text-center'>
              <h3>Raise more</h3>
              <p>Over $4.5 billion has been raised for causes around the world since our launch in 2001. Raise more for your partner charity with JustGiving.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='become-epartner container-fluid'>
        <div className='text-center py-4'>
          <div className='enclosure'>
            <h3 className='display-4'>Become an event partner</h3>
            <p>Fill in your details to help your event reach more people, get more participants, and raise more money for charity.</p>
          </div>
          <button className='button_universal btn btn-danger mb-4'>Sign up</button>
        </div>
      </div>
    </div>
  </Fragment>);
};


export default EPartners;