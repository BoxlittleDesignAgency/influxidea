import React, { Component, Fragment, PureComponent } from 'react';
import { Card, CardHeader, CardFooter, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import PageHeaderWOLink from '../common/page-header-without-link';

class Ideas extends PureComponent {
  render() {
    return (<Fragment>
      <div id='ideas' className='ideas'>
        <style>
          { `
      #ideas {
       
      }

      #img-diagonal {
        background: url('https://40.media.tumblr.com/d7a014af6eaec53ccdc7a4171033f96d/tumblr_na06t4fnlI1tubinno1_1280.jpg') no-repeat center;
        
        background-attachment: fixed;
      }

      ` }
        </style>
        <PageHeaderWOLink />
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <section className='comp-landing'>
                <div className='s_inner text-center py-6'>
                  <h1 className='display-3 hero-tag'>A Smarter Innovation</h1>
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
        <section className='comp-info my-4'>
          <div className='comp-create'>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h5>Seamless Innovation</h5>
                  <h2>Seriously, innovations has never been so easy</h2>
                  <p>Innovation connects to the ancient book of IDEAS, which was passed down throughout the years.
                    <br/> Using this book, we have connected with several amazing bloggers in the hopes of teaching you.</p>
                </div>
                <div id='img-diagonal' className='bg-parallax col-md-6'>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>);
  }
}


export default Ideas;