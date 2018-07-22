import React, { Component, Fragment, PureComponent } from 'react';


const StartFundRaise = () => {
  return (<Fragment>
            <style>
              { `
          .bg-first {
            background-color: #ccc;
          } 
          
          .comment-user {
            float: left;
          }
          
          .comment-time {
            color: #ccc;
          }
          
          .comment-time:before {
            content: " ";
            padding: 0 10px;
          }
          
          .comment p {
            clear: both;
            margin: 5px 0;
            line-height: 2;
          }
        ` }
            </style>
            <div className='container my-2'>
              <div className='row'>
                <div className='col'>
                  <h2 className='text-center'>Need some inspiration?</h2>
                  <h5 className='text-center'>
                                              Here are some examples of how other people have used Influxidea
                                                </h5>
                </div>
              </div>
              <div className='row'>
                <div className='offset-md-1 col-md-5'>
                  <div className='row'>
                      <img className='img-fluid rounded-circle comment-avatar' src="http://i.pravatar.cc/150?img=53" alt="jonathandunn"  />
        
                      <article className="comment py-4 pr-4">
                        <h3 className="comment-user">jonathandunn</h3>
                        <h4 className="comment-time">3 hours ago</h4>
                        <p className='py-2'>Good point! There are travel bloggers. Then there are freelancers: coders mainly.</p>
                      </article>
                      
                  </div>
                  <div className='row'>
                      <img className='img-fluid rounded-circle comment-avatar' src="http://i.pravatar.cc/150?img=25" alt="roberto98"  />
        
                      <article className="comment py-4 pr-4">
                        <h3 className="comment-user">roberto98</h3>
                        <h4 className="comment-time">4 hours ago</h4>
                        <p className='py-2'>Not one family on amongst that. Being nomadic is easier when you only have 1 person to worry about.</p>
                      </article>
                      
                  </div>
                </div>
                <div className='col-md-5'>
                <div className='row'>
                      <img className='img-fluid rounded-circle comment-avatar' src="http://i.pravatar.cc/150?img=10" alt="jjulia26"  />
        
                      <article className="comment py-4 pr-4">
                        <h3 className="comment-user">julia26</h3>
                        <h4 className="comment-time">4 hours ago</h4>
                        <p className='py-2'>Here people do business from the road (running an IT company, traveling and filming their travel.</p>
                      </article>
                      
                  </div>
                  <div className='row'>
                      <img className='img-fluid rounded-circle comment-avatar' src="http://i.pravatar.cc/150?img=15" alt="danielrubinho"  />
        
                      <article className="comment py-4 pr-4">
                        <h3 className="comment-user">jonathandunn</h3>
                        <h4 className="comment-time">3 hours ago</h4>
                        <p className='py-2'>Not saying it's not doable, some good friends of mine manage it but would have been a better article with a 50/50</p>
                      </article>
                      
                  </div>
                </div>
              </div>
            </div>
          </Fragment>);
}

export default StartFundRaise;