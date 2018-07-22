import React, { Component, Fragment, PureComponent } from 'react';




const MeetTeam = () => {
  return (
    <Fragment>
      <section id='meet-team' className='meet-team'>
        <style>
          { `
 #meet-team {
  padding-top: 120px;
  display: block;
}

#meet-team {
  background: url(https://images.unsplash.com/photo-1421809313281-48f03fa45e9f?auto=format&fit=crop) no-repeat center;
}
.meet-sizing {
  font-size: 2.8em;
  font-weight: 700;
}
.up-design {
  background-color: #fff;
  top: -50px;
}

` }
        </style>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='s_inner text-center py-6'>
                <h1 className='display-3 hero-tag dark-bg'>A Smarter And Diverse Team</h1>
                <div className='enclosure'>
                  <h3>Over 90% of investors get better with InfluxIdea Leverage.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="commonfoot">
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div className='row'>
                  <div className='col-sm-4 col-md-2'>
                    <i className='meet-sizing fas fa-angle-double-left'></i>
                  </div>
                  <div className='col-sm-4 col-md-8'>
                  </div>
                  <div className='col-sm-4 col-md-2'>
                    <i className='meet-sizing fas fa-angle-double-right float-right'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='meet-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
            </div>
            <div className='up-design col-md-8'>
              <h3 className='display-4 p-4 my-2'>InfluxIdea, one boutique for all your projects</h3>
              <p className='mx-auto'> Nisi aut tenetur et nisi aut. Ipsam neque magnam cumque eaque nobis a. Rem voluptatem porro amet aut. Omnis sit molestiae adipisci quia necessitatibus
                eum reiciendis dolore. Et rerum ea repudiandae fugiat cumque. Libero rerum doloribus. Numquam suscipit quia. Tempore ratione quos corrupti quas ut cumque
                et. Optio enim delectus consectetur quidem nobis illum omnis eveniet. Nobis pariatur est architecto consequatur et illum.
              </p>
            </div>
            <div className='col-md-2'>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <img src='https://40.media.tumblr.com/d94d2a63ab509f403111c6e8ebfc22a4/tumblr_ndyfu61hzH1tubinno1_1280.jpg' className='img-fluid' />
              
            </div>
            <div className='offset-md-2 col-md-6 p-5 '>
              <h2 className=''>Natural Stone</h2>
              <p>Temporibus magni quas et vel esse. Animi sint maxime blanditiis molestias cumque. Itaque impedit in commodi incidunt officia. Cum beatae mollitia nam et
                perspiciatis officiis possimus.</p>
            </div>
          </div>

          <div className='row my-4'>
            <div className='col-md-4'>
              <img src='https://41.media.tumblr.com/fddb3f2b0bdf390efd7ea87372e75fa5/tumblr_ndyg3pYbKW1tubinno1_1280.jpg' className='img-fluid' />
            </div>
            <div className='offset-md-2 col-md-6 p-5 '>
              <h2 className=''>Wood Flooring</h2>
              <p>Temporibus magni quas et vel esse. Animi sint maxime blanditiis molestias cumque. Itaque impedit in commodi incidunt officia. Cum beatae mollitia nam et
                perspiciatis officiis possimus.</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>);
}

export default MeetTeam;