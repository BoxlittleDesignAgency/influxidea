import React from 'react';



const Sitemap = () => {
  return (
    <div className='footer-sitemap'>
      <style>
        { `
        .semantics {
          text-align: left;
          font-weight: 300;
          word-spacing: 0.04em;
          letter-spacing: 0.1em;
        }
        .sitemap-h3 {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 400;
          color: #000!important;
        }
        
        ul.list-unstyled li a.more-links {
          color: #333745!important;
          position: relative;
          text-decoration: none;
        }

        a.more-links::after {
          content: '';
          position: absolute;
          border-bottom: 1px dashed #444;
          padding-bottom: 2px;
          top: 100%;
          left: 0;
          right: 100%;
          transition: all 0.5s;
        }

        ul.list-unstyled li a.more-links:hover, ul.list-unstyled li a.more-links:focus {   
          color: #34495E!important;
        }

        a.more-links:hover::after {
          right:0;
        }
        ` }
      </style>
      <div className='row semantics'>
        <div className='col-sm-6 col-md-3 py-4'>
          <h3 className='text-muted sitemap-h3'>About Influxidea</h3>
          <ul className="list-unstyled">
            <li className='py-1'><a className='more-links' href='/who-we-are'>Who we are</a></li>
            <li className='py-1'><a className='more-links' href='/meet-team'>Meet the team</a></li>
            <li className='py-1'><a className='more-links' href='/press'>Media centre</a></li>
          </ul>
        </div>
        <div className='col-sm-6 col-md-3 py-4'>
          <h3 className='text-muted sitemap-h3'>For Fundraisers</h3>
          <ul className="list-unstyled">
            <li className='py-1'><a className='more-links' href='/fund'>Fundraise for a charity</a></li>
            <li className='py-1'><a className='more-links' href='/start-funding'>Start crowdfunding</a></li>
            <li className='py-1'><a className='more-links' href='/login'>Log in to your account</a></li>
          </ul>
        </div>
        <div className='col-sm-6 col-md-3 py-4'>
          <h3 className='text-muted sitemap-h3'>For event partners and companies</h3>
          <ul className="list-unstyled">
            <li className='py-1'><a className='more-links' href='/companies'>Company Funding</a></li>
            <li className='py-1'><a className='more-links' href='/epartners'>Event partners</a></li>
          </ul>
        </div>
        <div className='col-sm-6 col-md-3 py-4'>
          <h3 className='text-muted sitemap-h3'>Help</h3>
          <ul className="list-unstyled">
            <li className='py-2'><a className='more-links' href='/help'>Visit our help section</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;