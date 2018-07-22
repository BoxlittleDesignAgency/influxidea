import React, { Component, Fragment, PureComponent } from 'react';



const Accessibility = () => {
  return (<Fragment>
            <div id='accessible' className='accessible'>
              <style>
                { `
          #accessible {
          padding-top: 120px;
          }
        ` }
              </style>
              <div className='container'>
                <div className='row'>
                  <div className='col'>
                    <section>
                      <div className='s_inner py-6'>
                        <h1 className='display-3 hero-tag text-center'>Accessibility Statement</h1>
                        <h2>Our commitment to accessibility</h2>
                        <div  className='mx-auto'>
                          <p>We believe giving should be for everyone. That’s why we’re committed to improving the accessibility of our website for all users, regardless of ability.
                            We also make sure our accessibility features work for most technologies, whether you’re using a tablet, mobile phone, laptop or older desktop computer.</p>
                          <h3>Key standards and guidelines</h3>
                          <p>We care about accessibility. Because of this, we put accessibility standards at the heart of how we research, design and deliver all of our new online
                            products and services. Here are some of the accessibility standards we aim to follow:</p>
                          <ul>
                            <li>We aim to achieve level A compliance of World Wide Web Consortium (W3C)’s <a href="https://www.w3.org/WAI/intro/wcag">Web Content Accessibility Guidelines</a> (WCAG
                              2.0).</li>
                            <li>Since September 2011 all new JustGiving web pages have been built using HTML5, CSS and Javascript</li>
                          </ul>
                          <h3>Supported browsers</h3>
                          <p>We want you to have a good experience with our site no matter which browser you’re using. Our website will display and function with  graded browser
                            support  across these supported browsers:</p>
                          <ul>
                            <li>Internet Explorer (IE9 and above)</li>
                            <li>Firefox</li>
                            <li>Chrome</li>
                            <li>Safari</li>
                            <li>Edge</li>
                            <li>Opera 38 and above</li>
                          </ul>
                          <h2>Current exceptions</h2>
                          <p>Our new page design has addressed issues such as colour contrast and labelling. Some of our older pages still need to be updated but, don’t worry,
                            we are on the case and will update these pages soon too.</p>
                          <h2>Responsive web design</h2>
                          <p>We have been working on many of our pages to make them responsive.</p>
                          <p>Responsive web design responds to your behaviour and specific device, based on screen size and platform. We build responsive pages using a mix of
                            flexible grids, layouts, images and CSS media queries. As you switch from a laptop to an iPad or phone, the responsive pages automatically resize.</p>
                          <p>Unfortunately older browsers like Internet Explorer 8 and earlier do not understand the use of CSS media queries. This means our responsive pages
                            show a desktop view for these browsers.</p>
                          <p>For example, if you’re using Explorer 8 or below and would like to magnify text, images and controls on the page, you can use the ‘Zoom’ feature.
                            Change the zoom level with the magnifying glass icon on the bottom right corner of each Explorer window or from the page menu. Choose 100%, 125%,
                            or 150%, or, specify magnification up to 1,000%.  </p>
                          <h2>Third-party content</h2>
                          <p>While we try to make sure all our web-based products are accessible to a wide range of users, we don’t control all of the content on our website.
                            Unfortunately we can’t guarantee the accessibility of content managed by fundraisers, charities and companies using our products.</p>
                          <h2>Tools for accessing content</h2>
                          <h3>Navigation shortcuts</h3>
                          <p>There is a short menu at the start of every page that allows screen reader users to jump directly to the most important parts of the page, including
                            main content and navigation. We hope this makes it easier for you to get where you need to with minimal searching.</p>
                          <h3>Changing font size</h3>
                          <p>Most browsers allow you to resize text on screen to a size you feel comfortable with. This tool is available in the menu of these browsers as follows:</p>
                          <ul>
                            <li>Internet Explorer 8 and 9 users (PC): select View > Zoom, and select the zoom state required.</li>
                            <li>Firefox users: select View > Zoom, then select Zoom in or Zoom out.</li>
                            <li>Chrome users: click on the Settings icon > select Zoom in or Zoom out.</li>
                            <li>Safari users (Mac): select View > Zoom, then select Zoom in or Zoom out.</li>
                          </ul>
                          <h3>Contrast</h3>
                          <p>We are careful to ensure we use enough contrast on the JustGiving website. But if you notice any colour combinations that cause you problems, please
                            <a
                              href="/contactus">contact us</a>
                          </p>
                          <h3>Links</h3>
                          <p>We work hard to make sure all our link names are distinct and not repeated on pages. </p>
                          <h2>Feedback</h2>
                          <p>Your feedback helps us improve the site for all of our visitors. If you have any difficulties accessing content on our website, or if you have suggestions
                            about how to improve its accessibility or usability, please <a href="/contactus">contact us</a></p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>);
}

export default Accessibility;