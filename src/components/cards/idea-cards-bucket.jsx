import React, { Component, Fragment, PureComponent } from 'react';
import IdeaCard from './idea-card';

class IdeaCardsBucket extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      cards:[
        {id: 1}, 
        {id: 2}, 
        {id: 3}]
    }

    
  }
render () {
  return (<Fragment>
            <style>
              { `
          .icard-container {
            // background-color: #2d3a4a;
            // -webkit-box-shadow: 0px 6px 60px -10px rgba(0,0,0,0.5);
            // -moz-box-shadow: 0px 6px 60px -10px rgba(0,0,0,0.5);
            // box-shadow: 0px 6px 60px -10px rgba(0,0,0,0.5);
}
          }
          ` }
            </style>
            <div className='row'>
              <div className='col'>
                <div className='icard-container'>
                  <div className='row'>
                    {
                      this.state.cards.map((card) => (<IdeaCard duration={150} key={card.id}/>))
                    }
                  </div>
                </div>
              </div>
            </div>
          </Fragment>);
}
}

export default IdeaCardsBucket;