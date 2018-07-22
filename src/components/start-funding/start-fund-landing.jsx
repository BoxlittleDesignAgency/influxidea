import React, { Component, Fragment, PureComponent } from 'react';
import { Card, CardHeader, CardFooter, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';



const StartFundLanding = () => {
  return (<section id='start-funding' className='start-funding mb-4'>
            <style>
              { `
      *, *:before, *:after {
        box-sizing: border-box;
      }

      #start-funding {
        padding-top: 120px;
      }

      .start-funding {
        background-color: #f5f5f5;
      }

      s_inner h1 {
        font-weight: normal;
        line-height: 1;
      }


      .first-div-1, .second-div-2 {
        padding-left:0!important; 
        padding-right:0!important; 
      }

      .fund-card {
        border-top: 0!important;
        border-bottom: 0!important;
        border-radius: 0!important;
        box-shadow: 0!important;
      }
      .remove-border-lft {
        border-left: 0!important;
      }

      .remove-border-rgt {
        border-right: 0!important;
      }
      
      ` }
            </style>
            <div className='container mb-2'>
              <div className='row'>
                <div className='col'>
                  <div className='s_inner text-center py-6'>
                    <h1 className='display-4 hero-tag'>I'm raising money for:</h1>
                  </div>
                </div>
              </div>
              <div className='row py-4'>
                <div className='first-div-1 col-md-5 offset-md-1'>
                  <Card className='fund-card remove-border-lft h-100'>
                    <CardBody>
                      <CardHeader className='mb-2'>
                        A charity
                      </CardHeader>
                      <CardText>
                        Take part in an event, celebrate an occasion, remember someone or do your own thing
                      </CardText>
                      <CardImg className='img-fluid rounded-circle mx-auto'  src='http://i.pravatar.cc/150?img=46' />
                      <Button className='frs-btn btn btn-danger my-4'>Start Fundraising</Button>
                      <CardText>
                        Donations will go to the charity
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
                <div className='second-div-2 col-md-5'>
                  <Card className='fund-card remove-border-rgt h-100'>
                    <CardBody>
                      <CardHeader className='mb-2'>
                        My own cause
                      </CardHeader>
                      <CardText>
                        Help a family member, friends, children, pets or a community in a time of need
                      </CardText>
                      <CardImg className='im-fluid rounded-circle mx-auto' src='http://i.pravatar.cc/150?img=59' />
                      <Button className='crs-btn btn btn-danger my-4'>Start Crowdfunding</Button>
                      <CardText>
                        Instead of a charity, you receive donations
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </section>);
}



export default StartFundLanding;