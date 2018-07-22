import React, { Component, Fragment, PureComponent } from 'react';

class Loading extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className='container py-5'>
        <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
        </div>
      </Fragment>  
      );
  }
}

export default Loading;
