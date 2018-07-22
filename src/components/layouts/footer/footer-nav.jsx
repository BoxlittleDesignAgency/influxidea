import React from  'react';

import Sitemap from './sitemap';
import TermsAndCondition from './terms-condition';
import Copyright from './copyright';


const FooterNav = () => {
    return (
    <footer id='main-footer' className='influx-footer-nav text-center p-4'>
        <div className='container'>
            <Sitemap/>
            <TermsAndCondition/>
            <Copyright />
        </div>
    </footer>);
}

export default FooterNav;