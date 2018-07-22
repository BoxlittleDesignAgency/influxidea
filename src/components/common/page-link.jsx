import React from 'react';

import { Nav } from 'reactstrap';



const PageLink = (props) => {
  return (<div className='atom container'>
  <div className='row'>
    <Nav className='navigation'>
      { props.linksComp }
    </Nav>
  </div>
</div>);
}

export default PageLink;