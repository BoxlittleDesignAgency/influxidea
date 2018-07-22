import React from 'react';


const Copyright = () => {

  return (
    <div className='row'>
      <style>
        { `
      div > p {
        font-weight: 300;
        letter-spacing: 0.1em;
      }

      .copyright {
        text-transform: uppercase!important;
      }
      
      .developer {
        color: #b5b5b5;
        text-transform: uppercase;
        letter-spacing: 0.3rem;
        font-size: 0.6rem;
        margin-top: 1.5rem;
        margin-left: 30px;
      }
      ` }
      </style>
      <div className='col'>
        <p><span className='copyright'><b>Influxidea.</b></span> Copyright © 2018</p>
        <div className="developer">
          <p className="small">© coded by Demola using Bootstrap 4</p>
      </div>
      </div>
      
    </div>);
}

export default Copyright; 
