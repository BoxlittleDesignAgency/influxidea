import React from 'react';


import PageHeaderWLinks from '../common/page-header-with-links';
import CardList from '../cards/card-list';


const Jobs = () => {
  return (
    <div className="jobs">
      <PageHeaderWLinks/>
      <div  style={ { textAlign: 'center' } }>
        <h1 className='display-4 hero-tag'>Jobs at InfluxIdea</h1>
        <CardList/>  
      </div>
      
    </div>
    );
}

export default Jobs;