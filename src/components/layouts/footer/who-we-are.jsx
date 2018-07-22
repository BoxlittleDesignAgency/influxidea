import React, { Component, Fragment, PureComponent } from 'react';




const WhoWeAre = () => {
  return (
    <Fragment>
      
      <style>
        { `
      #who-we-are {
        padding-top: 120px;
      }

      #who-we-are {
        background: url(https://images.unsplash.com/photo-1421809313281-48f03fa45e9f?auto=format&fit=crop) no-repeat center;
      }

      .wwa-schedule {
        color: #ffab40;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        word-spacing: 2px;
        font-weight: 400;
        font-size: 1.2em;
      }

      .wwa-claim {
        letter-spacing: 0.09em;
        font-size: 0.8em;
        word-spacing: 2px;
      }

      .insignia {
        text-transform: uppercase;
        letter-spacing: .09em;
      }

      .img-1, .img-2, .img-3 {
        display:block;
        // background-repeat: no-repeat;
        // background-position: center;
        // background-size: cover;
      }


      .wwa-h2 {
        font-size:1.8em;
        letter-spacing: 0.08em;

      }

` }
      </style>
      <section id='who-we-are' className='who-we-are'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='text-center py-6'>
                <h1 className='display-3 hero-tag dark-bg'>Who Exactly Are We...</h1>
                <div className='enclosure'>
                  <p className='mx-auto'> Nisi aut tenetur et nisi aut. Ipsam neque magnam cumque eaque nobis a. Rem voluptatem porro amet aut. Omnis sit molestiae adipisci quia necessitatibus
                    eum reiciendis dolore. Et rerum ea repudiandae fugiat cumque. Libero rerum doloribus. Numquam suscipit quia. Tempore ratione quos corrupti quas ut
                    cumque et. Optio enim delectus consectetur quidem nobis illum omnis eveniet. Nobis pariatur est architecto consequatur et illum.
                  </p>
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
                  <div className='col-sm-12 col-md-6'>
                    <h4 className='wwa-schedule'>schedule your free consultation</h4>
                    <h6 className='wwa-claim'>Claim your complementary fitness consultation</h6>
                  </div>
                  <div className='col-sm-12 col-md-3 offset-md-3'>
                    <button className='contact-button btn btn-primary'>GoFunding</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='wwa-info'>
        <div className='container'>
          <div className='row'>
            <div className='col py-4 m-4'>
              <div className='text-center'>
                <h2 className='insignia display-4'>influxidea</h2>
                <p>Eum dolor voluptatem consequuntur velit nesciunt. Modi cupiditate eaque voluptas non voluptatibus. Voluptates occaecati voluptatem commodi eos sit est
                  reprehenderit consequuntur omnis.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='img-1 col-md-4 my-2'>
              <img className='img-fluid' src='https://40.media.tumblr.com/d94d2a63ab509f403111c6e8ebfc22a4/tumblr_ndyfu61hzH1tubinno1_1280.jpg' />
            </div>
            <div className='img-2 col-md-4 my-2'>
              <img className='img-fluid' src='http://farm8.staticflickr.com/7064/6858179818_5d652f531c_h.jpg' />
            </div>
            <div className='img-3 col-md-4 my-2'>
              <img className='img-fluid' src='https://41.media.tumblr.com/fddb3f2b0bdf390efd7ea87372e75fa5/tumblr_ndyg3pYbKW1tubinno1_1280.jpg' />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 p-4'>
              <h2 className='wwa-h2 my-4'>Team</h2>
              <p>Quis nostrum odio fugiat. Et earum ut enim quisquam quia praesentium occaecati. Corrupti non sit eius assumenda.Ipsum atque qui qui eum est sit animi.
                Maiores enim numquam aspernatur tenetur. Illum sequi ullam rerum facilis ut. Consequuntur qui laborum nisi deleniti laudantium non cumque tempore.
              </p>
            </div>
            <div className='col-md-6 p-4'>
              <h2 className='wwa-h2 my-4'>Services</h2>
              <p>
                Aliquid esse libero esse quia iste voluptate rerum. Vitae optio aut unde molestiae ea. Rerum et nisi vitae debitis. Sunt recusandae voluptas velit. Debitis autem
                quasi libero nostrum totam. Quis nostrum odio fugiat. Et earum ut enim quisquam quia praesentium occaecati. Corrupti non sit eius assumenda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>);
};

export default WhoWeAre;