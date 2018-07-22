import React, {Component, Fragment} from 'react';


const PageNotFound = () => {
  const style404 = {
    fontSize: 72,
    fontWeight: 'bold'
  }

  return (
    <Fragment>
      <div id='page404' className='page404'>
        <style>
          { `
          #page404 {
          padding-top: 120px;
          }
        ` }
        </style>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <section className='text-center'>
                <h1>Page Not Found</h1>
                <div style={ style404 }>404</div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Fragment>);
}

export default PageNotFound;