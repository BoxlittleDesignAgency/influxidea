import React, { Component, Fragment, PureComponent } from 'react';

class DashBoardNav extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <div className="container mini-card-list">
            <div className="mini-card mini-blue">
              <div className="title">all projects</div><span className="glyphicon glyphicon-upload"></span>
              <div className="value">89</div>
              <div className="stat"><b>13</b>% increase</div>
            </div>
            <div className="mini-card mini-green">
              <div className="title">team members</div><span className="glyphicon glyphicon-upload"></span>
              <div className="value">5,990</div>
              <div className="stat"><b>4</b>% increase</div>
            </div>
            <div className="mini-card mini-orange">
              <div className="title">total budget</div><span className="glyphicon glyphicon-download"></span>
              <div className="value">$80,990</div>
              <div className="stat"><b>13</b>% decrease</div>
            </div>
            <div className="mini-card mini-red">
              <div className="title">new customers</div><span className="glyphicon glyphicon-download"></span>
              <div className="value">3</div>
              <div className="stat"><b>13</b>% decrease</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DashBoardNav;
