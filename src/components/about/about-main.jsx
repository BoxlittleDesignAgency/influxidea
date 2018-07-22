import React, {} from 'react';



const AboutMain = () => {
  return (<section id='about-main'>
            <style>
              { `
              .about-main-img {
                background: url(https://media.woodfordreserve.com/wp-content/uploads/2015/06/19163302/Distillery-1-WR.com_1.jpg) no-repeat;

                background-size: cover;
                background-attachment: fixed;
                border-right: 1em dashed #fff; 
                border-left: 1em dashed #fff; 
              }
        ` }
            </style>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <h1 className='text-center'>What we do</h1>
                  <div className='row'>
                    <div className='col-md-6'>
                      <p>This is a platform to meet investors or people with ideas. We decided to open a community where the two worlds which are the investors and business enthusiasts meet to discuss with an objective of starting a successful business.</p>
                      <p>We strive to ensure everyone that signs up to the platform, have their needs met. We provide you withopportunities like fun raising for charity, sell shares and on this platform you can get yourself, your business partner or do company funding.</p>
                    </div>
                    <div className='about-main-img col-md-6 mb-4 pb-4  d-none d-md-block'> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>);
}

export default AboutMain;