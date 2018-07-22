import React, { Component, Fragment } from 'react';

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Signup = () => {
  return (<Fragment>
            <div id='signup' className='signup'>
              <style>
                { `
              #signup {
                background: url(https://images.unsplash.com/photo-1421809313281-48f03fa45e9f?auto=format&fit=crop) no-repeat center;
              }

              #signup {
                padding-top: 120px;
                display: block;
              }
              ` }
              </style>
              <div className='container'>
                <div className='row mx-auto py-4'>
                  <div className='blue col-md-7 p-4 my-5'>
                    <div className='account-setup text-center mx-auto'>
                      <h3 className='form-h3 pt-4 my-4'>Already have an account?</h3>
                      <p className='space-it'>Discover the best bars, shops and sights<br /> 
                      in any city in the world. Get access to more
                      <br /> than 75 million short tips
                      </p>
                      <button className='signup-cta-btn btn btn-primary'>Log in now</button>
                    </div>
                  </div>
                  <div className='black col-md-5 p-4'>
                    <h2>Sign Up immediately</h2>
                    <Form className='formEx'>
                      <FormGroup>
                        <Col sm={ 10 }>
                        <Input id='signupName' type='text' name='name' placeholder='name' />
                        </Col>
                        <Col sm={ 10 }>
                        <Input id='signupEmail' type='email' name='email' placeholder='email' />
                        </Col>
                        <Col sm={ 10 }>
                        <Input id='signupPhone' type='number' name='phone' placeholder='phone' />
                        </Col>
                        <Col sm={ 10 }>
                        <Input id='signupPass' type='password' name='password' placeholder='password' />
                        </Col>
                        <Col sm={ 10 }>
                        <Input id='signupPassConf' type='password' name='passwordConf' placeholder='confirm password' />
                        </Col>
                      </FormGroup>
                      <FormGroup className='mx-auto'>
                        <Col sm={ 10 }>
                        <Button className='login-btn'>Sign me up!</Button>
                        </Col>
                      </FormGroup>
                    </Form>
                  </div>
                </div>



              </div>
            </div>
          </Fragment>);
}


export default Signup;