import React, { Fragment, PureComponent } from 'react';

import HeroLanding from './hero-landing';
import HomeIcon from './home-icon';
import HomeHeading from './home-heading';
import HomeInfo from './home-info';
import WhatsNew from './home-whats-new';
import Newsletter from './newsletter';
import InfluxCarousel from './influx-carousel';

import HappeningNow from './home-happening';
import HomeCardsDisplay from './home-cards-display';
import HomeScrolling from './home-scrolling';

class HomeMain extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className='influx-home-main container-fluid animated fadeIn'>
          <HeroLanding />
          <HomeScrolling />
          <HomeIcon />
          <HomeHeading />
          <WhatsNew />
          <HappeningNow />
          <HomeInfo />
          <Newsletter />
        </div>
      </Fragment>
    );
  }
}

export default HomeMain;