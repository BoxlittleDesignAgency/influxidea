import React from 'react';


const GalleryThumbs = () => {
  return(
    <section id='gallery-thumbs' className='p-5'>
      <style>
        { `
      #gallery-thumbs {
        background-color: #2d3a4a;
        position: relative;
        display: block;
        overflow: hidden;
      }

      .container::after {
        /* clearfix */
        content: '';
        display: table;
        clear: both;
      }


#cd-gallery-items li {
  margin-bottom: 1.5em;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.25em;
}
#cd-gallery-items li img {
  width: 100%;
  display: block;
  border-radius: 0.25em;
}
@media only screen and (min-width: 768px) {
  #cd-gallery-items li {
    width: 48%;
    float: left;
    margin-bottom: 2em;
    margin-right: 4%;
  }
  #cd-gallery-items li:nth-child(2n) {
    margin-right: 0;
  }
}
@media only screen and (min-width: 1170px) {
  #cd-gallery-items li {
    width: 31%;
    float: left;
    margin-bottom: 2.5em;
    margin-right: 3.5%;
  }
  #cd-gallery-items li:nth-child(2n) {
    margin-right: 3.5%;
  }
  #cd-gallery-items li:nth-child(3n) {
    margin-right: 0;
  }
}



      ` }
      </style>
      <div className='dark-underlay'>
        <div className='row'>
          <div className='col'>
            <div className='container pt-5'>
            <div className='text-center dark-bg'>
              <h1 className='display-4 pb-4'>Some of our Charities</h1>
            </div>
              <ul id="cd-gallery-items">
                <li>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/thumb_1.jpg" alt="Preview image" />
                </li>
                <li>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/thumb_1.jpg" alt="Preview image" />
                </li>
                <li>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/thumb_1.jpg" alt="Preview image" />
                </li>
                <li>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/thumb_1.jpg" alt="Preview image" />
                </li>
                <li>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/thumb_1.jpg" alt="Preview image" />
                </li>
                <li>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/thumb_1.jpg" alt="Preview image" />
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

export default GalleryThumbs;