import React, { Component, Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


const TitlrCard = (props) => {
  const {title, text, imgSrc} = props;
  return (<Fragment>
              <style>
                { `
        .card {
          position: relative;
          margin-bottom: 3.5rem;
          background-color: #2d3a4a;
          color:#fff!important;
          border: 0!important;
          border-radius: none!important;
          box-shadow: 0 0 3rem rgba(0, 0, 0, 0.25);
        }

        .card-body h5 {
          position: relative;
          display: inline-block;
          font-size: 1.5rem;
          text-transform: uppercase;
          font-family: "Yanone Kaffeesatz", sans-serif;
          font-weight: 700;
          letter-spacing: .5rem;
          text-indent: .5rem;
          margin: 0;
          margin-bottom: 1rem;
          padding-top: .25rem;
          padding-bottom: .25rem;
          box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.35), 0 1px 0 0 rgba(255, 255, 255, 0.35);
        }
        .card-body h5:after, .card-body h1:before {
          content: '';
          position: absolute;
          height: 1px;
          left: 1.5rem;
          right: 1.5rem;
          background-color:rgba(255, 255, 255, 0.35)!important;
          //background-color: rgba(103, 123, 133, 0.25);
        }
        .card-body h5:after {
          top: -.3rem;
        }
        .card-body h5:before {
          bottom: -.3rem;
        }

        .card-body p {
          margin: 0 auto;
          width: 10rem;
          font-size: .5rem;
          line-height: 2;
        }

        .card-footer {
          position: absolute;
          width: 12rem;
          height: 4rem;
          line-height: 3rem;
          bottom: -3.2rem;
          right: -1.2rem;
          background-color: rgba(84, 99, 109, 0.95);
          font-size: .8rem;
          font-family: "Yanone Kaffeesatz", sans-serif;
          font-weight: 400;
          letter-spacing: .3em;
          color: #fff;
          text-align: center;
          text-transform: uppercase;
          box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25), -0.5rem -0.5rem 2rem rgba(0, 0, 0, 0.25);
        }    
        ` }
              </style>
              
                <div className='col-md-4'>
                  <Card>
                    <CardImg className='card-img img-fluid' top src={imgSrc} alt='Card Responsive image cap' />
                    <CardBody className='text-center'>
                      <CardTitle>{title}</CardTitle>
                      <CardText>{text}</CardText>
                    </CardBody>
                    <Button className='card-footer'>learn more</Button>
                  </Card>
                </div>
          </Fragment>);
}

TitlrCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

export default TitlrCard;