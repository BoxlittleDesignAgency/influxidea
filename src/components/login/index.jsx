import React, { Fragment, Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = () => {
  return (<Fragment>
            <section id='login' className='login'>
              <style>
                { ` 
                  #login {
                    background: url(https://images.unsplash.com/photo-1421809313281-48f03fa45e9f?auto=format&fit=crop) no-repeat center;
                  }

                  #login {
                    padding-top: 120px;
                    display: block;
                  }

                  
                ` }
              </style>
              <div className='container'>
                <div className='row mx-auto py-4'>
                  <div className='blue col-md-7 p-4 my-5'>
                    <div className='account-setup text-center mx-auto'>
                      <h3 className='form-h3 pt-4 my-4'>Have an account?</h3>
                      <p className='space-it'>Do you want to meet up with friends?
                        <br/> Any idea how to make the meeting more interesting? sign up now</p>
                    </div>
                  </div>
                  <div className='black col-md-5 p-4'>
                    <h2>Log in</h2>
                    <Form className='formEx'>
                      <FormGroup>
                        <Col sm={ 10 }>
                        <Input id='exampleEmail' type='email' name='email' placeholder='your email' />
                        </Col>
                        <Col sm={ 10 }>
                        <Input id='examplePass' type='password' name='password' placeholder='your password' />
                        </Col>
                      </FormGroup>
                      <FormGroup className='mx-auto'>
                        <Col sm={ 10 }>
                        <Button className='login-btn'>Log in</Button>
                        </Col>
                      </FormGroup>
                    </Form>
                    <p className=''><small>Already registered? <a href="#">Sign In</a></small></p>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>);
};

export default Login;