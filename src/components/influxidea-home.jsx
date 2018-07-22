import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './layouts/header/index';
import Footer from './layouts/footer/index';

import HomeMain from './home/home-main';
import About from './about/index';
import Login from './login/index';
import Signup from './signup/index';
import Logout from './logout/index';
import Help from './help/index';
import Charities from './categories/charities';
import Companies from './categories/companies';
import Ideas from './categories/ideas';
import EPartners from './categories/epartners';
import Terms from './privacy/terms';
import Privacy from './privacy/privacy';
import WhoWeAre from './layouts/footer/who-we-are';
import MeetTeam from './layouts/footer/meet-team';
import FundRaiser from './layouts/footer/fund-raiser';
import StartFunding from './start-funding/index';

import Jobs from './jobs/index';
import Press from './press/index';
import PageNotFound from './404/page-not-found';
import Accessibility from './privacy/accessibility';
import ContactUs from './contactus';
import Loading from './loading';
import Dashboard from './dashboard';
import SideNav from './dashboard/layout/side-nav';

class InfluxideaHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      loading: true
    };
  }

  componentDidMount() {
    try {
      setTimeout(() => this.setState({
        loading: false
      }), 5000);
      console.log('componentDidMount will be used in fetching data');
    } catch (error) {
      console.log('componentDidMount errored out while fetching data');
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
    console.log(error, info);
  }

  render() {
    return (
      <Fragment>
        <Header />
        { (this.state.hasError) ? <h1>Whoops!! Sorry...</h1> :
          (this.state.loading) ? <Loading /> :
            <Switch>
              <Route path='/' component={ HomeMain } exact={ true } />
              <Route path='/about' component={ About } />
              <Route path='/start-funding' component={ StartFunding } />
              <Route path='/login' component={ Login } />
              <Route path='/signup' component={ Signup } />
              <Route path='/logout' component={ Logout } />
              <Route path='/help' component={ Help } />
              <Route path='/charities' component={ Charities } />
              <Route path='/companies' component={ Companies } />
              <Route path='/ideas' component={ Ideas } />
              <Route path='/epartners' component={ EPartners } />
              <Route path="/press" component={ Press } />
              <Route path="/jobs" component={ Jobs } />
              <Route path="/terms" component={ Terms } />
              <Route path="/who-we-are" component={ WhoWeAre } />
              <Route path="/meet-team" component={ MeetTeam } />
              <Route path="/contactus" component={ ContactUs } />
              <Route path="/fund" component={ FundRaiser } />
              <Route path="/privacy" component={ Privacy } />
              <Route path="/accessible" component={ Accessibility } />
              <Route path="/dashboard" component={ Dashboard } />
              <Route component={ PageNotFound } />
            </Switch> }
        <Footer />
      </Fragment>
    );
  }
}

export default InfluxideaHome;