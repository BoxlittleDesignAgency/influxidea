import React, { Component, Fragment, PureComponent } from 'react';


class HomeInfo extends PureComponent {
  render() {
    return (<section id='info' className='container py-3'>
              <style>
                { `
              
              ` }
              </style>
              <div className='row'>
                <div className='col-sm-6 col-md-6 pt-2 mt-4 floater'>
                  <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(151).jpg' className='img-fluid' />
                </div>
                <div className='col-sm-6 col-md-6 text-center  info-new-text'>
                  <h1 className='custom-h'>Lorem ipsum</h1>
                  <p className='paragraphs'>Omnis molestias nesciunt aliquid impedit ratione et quo et. Ut et natus et dicta magni laborum nemo dolores ipsum. Eum atque unde ut aliquam dolorum qui. Odit
                    eveniet recusandae voluptas velit voluptatem sed voluptatem et. Soluta occaecati nostrum quo est dolorum impedit et eius. Et rem tempora repudiandae veniam.
                  </p>
                  <button className='button_universal btn btn-danger my-2'>Learn More</button>
                </div>
              </div>
            </section>);
  }
}

export default HomeInfo;