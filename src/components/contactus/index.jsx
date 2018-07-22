import React, { Component, Fragment } from 'react';

import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';


const ContactUs = () => {
  return (<Fragment>
    <div id='contactus' className='contactus pb-5'>
      <style>
        { `
      #contactus {
        padding-top: 120px;
        background-color: #ccc;
      }
      .contact-img-slider {
        background: url('http://jareddevine.com/photos/watch.jpeg') center no-repeat;
        background-size: cover;
          min-height: 300px;
          height: 100%;
      }

      .contact-content {
        background-color: #fff;
      }

      .contact-shadow {
        -webkit-box-shadow: 0px 6px 60px -10px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 6px 60px -10px rgba(0,0,0,0.5);
        box-shadow: 0px 6px 60px -10px rgba(0,0,0,0.5);
      }

      

      
      
      ` }
      </style>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <section>
              <div className='s_inner text-center py-5'>
                <h1 className='display-3 hero-tag'>Contact Us</h1>
                <div className='contact-shadow'>
                  <div className='row no-gutters'>
                    <div className='col-md-6'>
                      <div className='contact-img-slider outer_box-bg'>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='contact-content  p-4 p-md-5 h-100'>
                        <Form>
                          <div className='form-inline'>
                            <FormGroup className="mb-4">
                              <Label for="contactName" hidden>Name</Label>
                              <Col md={ 11 }>
                                <Input type="text" name="name" id="contactName" placeholder="Your name" />
                              </Col>
                            </FormGroup>
                            <FormGroup className="mb-4">
                              <Label for="contactEmail" hidden>Email</Label>
                              <Col md={ 11 }>
                                <Input type="email" name="email" id="contactEmail" placeholder="Your email" />
                              </Col>
                            </FormGroup>
                          </div>
                          <FormGroup className="mb-4 mb-sm-4">
                            <Label for="contactSubject" hidden>Subject</Label>
                            <Col md={ 11 }>
                              <Input type="text" name="subject" id="contactSubject" placeholder="Subject" />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Label for="contactText" hidden>Text Area</Label>
                            <Col md={ 11 }>
                              <Input type="textarea" name="text" id="contactText" placeholder="Write your message" />
                            </Col>
                          </FormGroup>
                          <button className='contact-button btn btn-primary'>Send Email</button>
                        </Form>
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


export default ContactUs;