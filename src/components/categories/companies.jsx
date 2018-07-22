import React, { Component, Fragment, PureComponent } from 'react';
import { Card, CardHeader, CardFooter, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import PageHeaderWOLink from '../common/page-header-without-link';

const Companies = () => {
  return (<Fragment>
            <div id='companies' className='companies'>
              <style>
                { `
      #companies {
       
      }

      .far {
        
      }

      #img-diagonal {
        background: url('https://40.media.tumblr.com/d7a014af6eaec53ccdc7a4171033f96d/tumblr_na06t4fnlI1tubinno1_1280.jpg') no-repeat center;
        
        background-attachment: fixed;
      }

      .price-plans .card {
        border: none!important;
        border-radius: 0!important;
        background-color: #fbfbfc;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      }

      .card-header {
        border-bottom: 0!important;
      }

      .price-pans .card-body {
        background-color: #eee;
      }

      p.card-text:first-letter {
        float: left;
        margin-right: 10px;  
        font-size: 4em;
        font-weight: 700;
        line-height: 1;
      }
      .card-footer {
        padding: 0.75rem 1.25rem!important;
        border-top: 0!important;
      }
      
      .btn-close {
        font-size: 1em;
        text-transform: uppercase;
        color: #000!important;
      }
      
      
      .btn-comment {
        display: inline-block;
        width: 40px;
        height: 40px;
        color:#000!important;
        font-size: 2em;
      }
      ` }
              </style>
              <PageHeaderWOLink />
              <div className='container'>
                <div className='row'>
                  <div className='col'>
                    <section className='comp-landing'>
                      <div className='s_inner text-center py-6'>
                        <h1 className='display-3 hero-tag'>A Smarter Company Funding</h1>
                        <h3>Over 1,000 corporations are raising money for amazing causes around the world with InfluxIdea.</h3>
                        <p>Dignissimos nisi velit enim soluta facilis est recusandae dolor voluptate. Voluptatum ut pariatur nobis. Neque aut ratione non. Possimus minima optio
                          ea reprehenderit natus vel. Cum fuga doloremque autem consequatur atque. Voluptatibus omnis possimus ut qui quo. Ratione facere dicta. Tenetur ullam
                          est blanditiis vitae earum maiores. Et error dolor. Nulla qui sequi voluptas. Magni velit quaerat et voluptatibus. Laborum ea rerum. Nihil distinctio
                          harum veritatis nulla voluptatem saepe.</p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <section className='comp-info'>
                <div className='comp-create'>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h5>Seamless Forking</h5>
                        <h2>Seriously, forking has never been so easy</h2>
                        <p>Forkology connects to the ancient book of forking, which was passed down throughout the years.
                          <br/> Using this book, we have connected with several amazing bloggers in the hopes of teaching you.</p>
                      </div>
                      <div id='img-diagonal' className='bg-parallax col-md-6'>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className='comp-profile'>
                <div className='comp-profile-info'>
                  <div className='container'>
                    <div className='row text-center'>
                      <h2 className='mx-auto mt-4 py-2'>How your Company Profile works</h2>
                      <h4>
                                                              Your branded Company Profile has a range of features designed to inspire and encourage your employees to start corporate fundraising. You can set up events, teams and leaderboards to get everyone involved.
                                                              </h4>
                    </div>
                    <div className='row'>
                      <div className='col-md-4 my-4'>
                      <div className='comp-profile-card mb-4 pb-4'>
                      <img src='https://41.media.tumblr.com/0390d80d6c8cc4a7096033182a4bfe8a/tumblr_ndyvukSjNl1tubinno1_1280.jpg' className='img-fluid'/>
                      </div>
                      <div className='comp-profile-card mb-4 pb-4'>
                      <img src='https://41.media.tumblr.com/3dde93f097de5e9db4f11b67729d6a2e/tumblr_na06dk1vWM1tubinno1_1280.jpg' className='img-fluid'/>
                      </div>
                      
                      </div>
                      <div className='col-md-4 my-4'>
                        <div className='comp-profile-card mb-4 pb-4'>
                          <h2><span></span>Company Branding</h2>
                          <p>Your Company Profile can be branded with your logo and colour scheme.</p>
                        </div>
                        <div className='comp-profile-card mb-4 pb-4'>
                          <h2><span></span>Clear Totals</h2>
                          <p>View your total number of employee fundraisers and donations raised at a glance.</p>
                        </div>
                        <div className='comp-profile-card mb-4 pb-4'>
                          <h2><span></span>Form Teams</h2>
                          <p>Set up teams for your employee fundraisers to join or let them create their own.</p>
                        </div>
                      </div>
                      <div className='col-md-4 my-4'>
                        <div className='comp-profile-card mb-4 pb-4'>
                          <h2><span></span>Storytelling</h2>
                          <p>Tell your story and inspire your employees about your company cause.</p>
                        </div>
                        <div className='comp-profile-card mb-4 pb-4'>
                          <h2><span></span>Leaderboards</h2>
                          <p>Create some healthy competition with leaderboards displaying your top fundraisers.</p>
                        </div>
                        <div className='comp-profile-card mb-4 pb-4'>
                          <h2><span></span>Add Events</h2>
                          <p>Add any organised corporate fundraising events to your Profile so your employees can sign up.</p>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <button className='button_universal btn btn-danger mx-auto'>View your Company Profile in detail</button>
                    </div>
                  </div>
                </div>
              </section>
              <section className='comp-price-plans my-4 py-4'>
                <div className='container'>
                  <div className=' dark-bg text-center p-4'>
                    <h2 className='mx-auto'>Corporate Fundraising Plans</h2>
                  </div>
                  <div className='row'>
                    <div className='price-plans col-md-6'>
                      <Card>
                        <CardHeader tag='h2'>Basic Plan</CardHeader>
                        <CardBody>
                          <CardTitle>£39/Month</CardTitle>
                          <CardTitle>£19/Month for companies with less than 100 employees or raising less than £10k</CardTitle>
                          <CardText><i className='fas fa-check'></i> Your own hosted, branded microsite
                          </CardText>       
                          <CardText>
                            <i className='fas fa-check'></i> Free fundraising text codes
                            </CardText>
                            <CardText><i className='fas fa-check'></i> Unlimited fundraising pages for your employees
                            </CardText>
                            <CardText>
                              <i className='fas fa-check'></i> Employees can link their fundraising pages to form teams
                            </CardText>
                            <CardText>
                              <i className='fas fa-check'></i> Basic fundraising reports
                            </CardText>
                            <CardText>
                              <i className='fas fa-check'></i> Dedicated customer support service for you and your employee fundraisers
                            </CardText>
                            <CardText><i className='fas fa-check'></i> A 'Get Started' webinar and 'How-To' guide</CardText>

<CardText><i className='fas fa-check'></i> Unlimited Crowdfunding Pages for local community fundraising initiatives</CardText>

<CardText><i className='fas fa-check'></i> Admin access for up to five people</CardText>
                        </CardBody>
                        <CardFooter>
                        <nav>
                            <a href="#" className="btn-close" title="Close">Close</a>
                            <a href="#" className="btn-comment float-right" title="Comment here"><i className="far fa-comment-alt" ></i></a>
                          </nav>
                        </CardFooter>
                      </Card>
                    </div>
                    <div className='price-plans col-md-6'>
                      <Card>
                        <CardHeader tag='h2'>Digital Solutions Plan</CardHeader>
                        <CardBody>
                          <CardTitle>Custom-built digital fundraising solutions built by our in-house client services team</CardTitle>
                          <CardText>
                            The digital solutions team work side-by-side each client to understand your unique needs and tailor projects and solutions accordingly. Digital Solutions are priced
                            separately to our corporate fundraising basic plan and include, but are not restricted to, the following:
                          </CardText>
                          <CardText>
                            <i className="fas fa-check"></i> Custom built widgets to showcase fundraising (leaderboards, totalisers)
                          </CardText>
                          <CardText><i className="fas fa-check"></i> Custom thank you pages</CardText>
                          <CardText><i className="fas fa-check"></i> Client branded landing pages for specific events and campaigns</CardText>
                          <CardText><i className="fas fa-check"></i> Event fundraising hubs to process registrations, accept donations, highlight results</CardText>
                          <CardText><i className="fas fa-check"></i> Groups functionality – bespoke pages for offices/regions/countries etc. linked to main landing</CardText>
                        </CardBody>
                        <CardFooter>
                          <nav>
                            <a href="#" className="btn-close" title="Close">Close</a>
                            <a href="#" className="btn-comment float-right" title="Comment here"><i className="far fa-comment-alt" ></i></a>
                          </nav>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Fragment>);
}


export default Companies;