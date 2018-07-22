import React, { Component, PureComponent } from 'react';


const StartFundInfo = () => {
  return (<div id='start-info' className='fund-info  bg-cover container-fluid p-2'>
            <style>
              { `
                .img-1 {
                  background-image: url(https://media.woodfordreserve.com/wp-content/uploads/2015/06/19163302/Distillery-1-WR.com_1.jpg);
                }
                .img-2 {
                  background-image:url(http://farm8.staticflickr.com/7064/6858179818_5d652f531c_h.jpg);
                }

                .img-3 {
                  background-image:url(https://41.media.tumblr.com/3dde93f097de5e9db4f11b67729d6a2e/tumblr_na06dk1vWM1tubinno1_1280.jpg);
                }

                .img-4 {
                  background-image:url(https://41.media.tumblr.com/0390d80d6c8cc4a7096033182a4bfe8a/tumblr_ndyvukSjNl1tubinno1_1280.jpg);
                }

                .sub-nav-wrap {
                  position: relative;
                  font-weight: normal;
                }

                .text-l {
                  text-align: right;
                }

                .sub-nav-wrap a {
                  overflow: hidden;
                  display: block;
                  outline: 0;
                  text-decoration: none;
                  transition: color 0.15s linear;
                  box-sizing: border-box;
                }

                .sub-nav-img {  
                  background-size: cover;
                  width: 100%;
                  height: 26rem;
                  background-position: center center;
                  background-repeat: no-repeat;
                  background-color: transparent;
                  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)
                }
                .sub-nav-content.content-dark {
                  color: #fff;
                }

                .sub-nav-content {
                  position: absolute;
                  bottom: 60px;
                  left: 0;
                  width: 84.7%;
                  padding: 0 60px;
                  line-height:1.4;
                  z-index: 1;
                  font-size: 18px;
                }
                .sub-nav-content h2 {
                  margin: 0 0 10px;
                  line-height: 1;
                  font-weight: normal;
                  font-size: 4rem;
                  display: block;
                }

                .expertise-center-hero {
                  background-color: #fff;
                }

                

                .expertise-center {
                  display: table;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 200px;
                  height: 200px;
                  margin: -100px 0 0 -100px;
                  padding: 10px;
                  border-radius: 50%;
                }

                .expertise-center-hero {
                  top: 10px;
                  left: 10px;
                  display: block;
                  position: absolute;
                  width: calc(100% - 20px);
                  height: calc(100% - 20px);
                  border-radius: 50%; 
                  font-size: 1.2rem;
                  line-height: 1.6; 
                  vertical-align: middle;  
                  padding: 20px 0 10px;       
                }
                ` }
            </style>
            <div className='container'>
              <div className='row sub-nav-wrap'>
                <div className='p-1 col col-sm-6 '>
                  <a>
                    <div className='sub-nav-img img-1'></div>
                    <div className='sub-nav-content content-dark'>
                      <h2>Websites</h2>
                      <div className='sub-nav-teaser'>
                        <p>Award-wining websites, bringing brands to life with refreshing online experiences.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='p-1 col col-sm-6 '>
                  <a>
                    <div className='sub-nav-img img-2'></div>
                    <div className='sub-nav-content content-dark text-l'>
                      <h2>Apps</h2>
                      <div className='sub-nav-teaser'>
                        <p>Superior experiences on smart devices.Native iOS, Android & more..</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-100 d-sm-none d-md-block'></div>
                <div className='p-1 col col-sm-6 '>
                  <a>
                    <div className='sub-nav-img img-3'></div>
                    <div className='sub-nav-content content-dark'>
                      <h2>eCommerce</h2>
                      <div className='sub-nav-teaser'>
                        <p>Engaging online retail through integrated platforms. From 10-10,000 products.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='p-1 col col-sm-6'>
                  <a>
                    <div className='sub-nav-img img-4'></div>
                    <div className='sub-nav-content text-l'>
                      <h2>Software</h2>
                      <div className='sub-nav-teaser'>
                        <p>Custom product development from integrations to entire platforms.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='expertise-center text-center'>
                  
                  <div className='expertise-center-hero'>
                  Design
                    <br/> User Experience
                    <br /> Content
                    <br/> Technology
                  </div> 
                </div>
              </div>
            </div>
          </div>);
}

export default StartFundInfo;