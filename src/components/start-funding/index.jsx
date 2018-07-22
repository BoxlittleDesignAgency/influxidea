import React, { Component, Fragment, PureComponent } from 'react';

import StartFundLanding from './start-fund-landing';
import StartFundInfo from './start-fund-info';
import StartFundOther from './start-fund-other';
import StartFundRaise from './start-fund-raise';

const StartFunding = () => {
  return (
    <Fragment>
      <div className='fund'>
        <StartFundLanding/>
        <StartFundRaise />
        <StartFundOther/>
      </div>
    </Fragment>
  );
}

export default StartFunding;