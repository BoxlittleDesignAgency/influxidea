import React, { Component, Fragment, PureComponent } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';



const IdeaCard = () => {
  return (<Fragment>
            <style>
              { `
              .card {
                background-color: transparent!important;
                border: none!important;
              }

              .card-image {
                width: 20.5rem;
                top: -1rem;
                right: 2rem;
                box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.25), 0 1rem 4rem rgba(0, 0, 0, 0.5);   
              }

              .card-body {
                width: 19rem;
                height: 17rem;
                background-color: white;
                box-sizing: border-box;
                color: #677b85;
                margin: 0 10px;
                box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.13), 1rem 1rem 1.5rem rgba(0, 0, 0, 0.13);
              }

              .card-body:after, .card-body:before {
                content: '';
                height: 1px;
                background-color: rgba(103, 123, 133, 0.1);
              }

              .card-body:after {
                top: 1rem;
              }

              .card-body:before {
                bottom: 1rem;
              }

              .card-subtitle {
                color: rgba(162, 127, 96, 0.9);
                text-transform: uppercase;
                font-size: .75rem;
                margin: 0;
                margin-top: 0rem;
                margin-bottom: 1.5rem;
              }

              h5.card-title {
                position: relative;
                display: inline-block;
                font-size: 1.5rem;
                text-transform: uppercase;
                font-weight: 700;
                letter-spacing: .5rem;
                text-indent: .5rem;
                margin: 0;
                margin-bottom: 1rem;
                padding-top: .25rem;
                padding-bottom: .25rem;
                box-shadow: 0 -1px 0 0 rgba(103, 123, 133, 0.25), 0 1px 0 0 rgba(103, 123, 133, 0.25);
              }

              card-title:after, .card-title:before {
                content: '';
                height: 1px;
                background-color: rgba(103, 123, 133, 0.25);
              }

              card-title:after {
                top: -.3rem;
              }

              card-title:before {
                bottom: -.3rem;
              }

              .card-text {
                margin: 0 auto;
                width: 15rem;
                font-size: .75rem;
                line-height: 2;
              }

              .card-btn {
                width: 20rem;
                height: 5rem;
                line-height: 5rem;
                background-color: rgba(84, 99, 109, 0.90);
                font-size: .8rem;
                // font-family: "Yanone Kaffeesatz", sans-serif;
                font-weight: 400;
                letter-spacing: .3em;
                color: #fff;
                text-transform: uppercase;
                box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25), -0.5rem -0.5rem 2rem rgba(0, 0, 0, 0.25);
              }

              .btn {
                border-radius: 0!important;
              }
      ` }
            </style>
            <div id='idea-card' className='idea-card px-4 py-2'>
              <Card>
                <CardImg className='card-image img-fluid' top width='100%' src='https://unsplash.it/800?image=835&w=318&h=180' alt='Card Responsive image cap' />
                <CardBody className='text-center'>
                  <CardSubtitle> desert</CardSubtitle>
                  <CardTitle>Thai Mango</CardTitle>
                  <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nihil quas veritatis odit, blanditiis pariatur assumenda.</CardText>
                </CardBody>
                <Button className='card-btn'>learn more</Button>
              </Card>
            </div>
          </Fragment>);
}


export default IdeaCard;