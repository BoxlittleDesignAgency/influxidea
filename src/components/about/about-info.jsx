import React, { Component, Fragment, PureComponent } from 'react';



const AboutInfo = () => {
  return (
    <Fragment>
      <section className='text-center'>
        <div className='repos'>
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>1000+ Helpless Repos to Fork From</h2>
                <p>With over 1000 repos out there under the GPL License, forking and rebranding has never been so easy!</p>
              </div>
            </div>
          </div>
        </div>
        <div className='seamless'>
          <div className="container">
            <div className="row">
              <div className="col">
                <h5>Seamless Forking</h5>
                <h2>Seriously, forking has never been so easy</h2>
                <p>Forkology connects to the ancient book of forking, which was passed down throughout the years.
                  <br/> Using this book, we have connected with several amazing bloggers in the hopes of teaching you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-center'>
        <div className='cta'>
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Seriously, just trust us and download the guide. <br/> "There are no strings attached"</h2>
                <a className="button" href="#">Get Forkology Now — Yes it's free</a>
              </div>
            </div>
          </div>
        </div>
        <footer className="basefoot">
          <p>Forkology is a random, yet amazing template, that is in no way assoiciated with any company...
            <br/>Forkology © 2015</p>
        </footer>
      </section>
    </Fragment>);
}

export default AboutInfo;