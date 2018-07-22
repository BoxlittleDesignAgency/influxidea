import React, { Fragment, Component, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';

import PageLink from './page-link';

const links = [
  {
    name: 'About Us',
    url: '/about'
  },
  {
    name: 'Press',
    url: '/press'
  },
  {
    name: 'Jobs',
    url: '/jobs'
  }
];

const PageHeaderWLinks = () => {
  const linksComp = links.map((link, index) => {
    return (
      <NavItem key={ index }>
        <div className='nav-link'>
          <Link className={ "links" } to={ link.url }>
          { link.name }
          </Link>
        </div>
      </NavItem>
      );
  });
  return (<header id='page-header' className='page-header  text-center'>
            <div className='container'>
              <div className='sub-nav'>
                <PageLink linksComp={ linksComp } />
              </div>
            </div>
          </header>);
}

// class PageHeader extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     fetch('../../../data/navigation.json')
//     .then(rsp => rsp.toJson())
//     .then(navs => {
//       this.links = navs;
//       console.log(this.links)
//     })
//   }

//   render() {
//     return (<header id='page-header' className='page-header  text-center'>
//             <div className='container'>
//               <div className='sub-nav'>
//                 <PageLink  />
//               </div>
//             </div>
//           </header>);
//   }
// }


export default PageHeaderWLinks;