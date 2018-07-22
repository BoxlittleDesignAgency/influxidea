import React, { Component, Fragment, PureComponent} from 'react';



const TwoColumn = () => {
  return (<Fragment>
    <section id='feature-one'>
      <div className='container'>
        <div className='row'>
          <div className="col-lg-6">
            <iframe width="100%" height="315" src="https://mdbootstrap.com/img/video/Sail-Away.mp4" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <h6>Watch this</h6>
            <h2>Whitness of power StartUp ...</h2>
            <p className="lead">Just like the old bootstrap, but better. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Just like the old bootstrap, but better. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500s.</p>
          </div>
        </div>
      </div>
    </section>
  </Fragment>);
};

export default TwoColumn;