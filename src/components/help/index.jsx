import React, { Component, Fragment, PureComponent } from 'react';

import PageHeader from '../common/page-header';

const Help = () => {
  return (<Fragment>
            <div id='help' className='help'>
              <style>
                { `
      #help {
      
      }

      .help-card {
  //       -webkit-box-shadow: 0px 6px 40px -10px rgba(0,0,0,0.4);
  // -moz-box-shadow: 0px 6px 40px -10px rgba(0,0,0,0.4);
  // box-shadow: 0px 6px 40px -10px rgba(0,0,0,0.4);
      }

      .help-card {
        background-color: #e5e0cc;
      }

      .help-card-side {
        background-color: #4886bd;
        color:#fff;
      }
      ` }
              </style>
              <PageHeader />
              <div className='container'>
                <div className='row'>
                  <div className='col'>
                    <section>
                      <h1 className='text-center my-2'>Help Center</h1>
                      <div className='row my-2'>
                        <div className='col-md-8'>
                          <div className='help-card p-4'>
                            <p>Blanditiis non est molestiae repudiandae. Necessitatibus est eum voluptatem necessitatibus quo impedit veritatis et officiis. Eaque harum in autem
                              aut culpa vel nihil sit. Quas sed odio qui aut. Unde molestiae molestiae. Hic rerum quaerat provident suscipit vel laboriosam. Voluptatem autem
                              molestiae unde ratione dolor placeat necessitatibus soluta. Facere et maxime voluptatem sunt. Distinctio ipsum et dolorem cum hic temporibus.
                              Et quo cum nemo maxime aut. Et voluptatem dolorem quia voluptatem sunt natus. Modi quia aut natus enim voluptatem unde. Tempore provident sapiente
                              veniam laudantium. Tempore temporibus aut consectetur. Numquam aut voluptatum.</p>
                          </div>
                          <hr/>
                          <div className='help-card p-4'>
                            <p>Aut deleniti aliquam facilis amet earum suscipit. Autem expedita reprehenderit. Voluptates dicta a et minima iure maxime eveniet aut libero. Qui
                              et iusto et quam optio harum quibusdam repellendus. Delectus in tempora culpa.</p>
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className='help-card-side p-4'>
                            <p>
                              Eveniet assumenda natus eius accusamus qui assumenda ipsam.
                            </p>
                            <p>
                              Eveniet assumenda natus eius accusamus qui assumenda ipsam.
                            </p>
                            <p>
                              Eveniet assumenda natus eius accusamus qui assumenda ipsam.
                            </p>
                          </div>
                          <div className='help-card-side p-4 my-4'>
                            <p>
                              Eveniet assumenda natus eius accusamus qui assumenda ipsam.
                            </p>
                            <p>
                              Eveniet assumenda natus eius accusamus qui assumenda ipsam.
                            </p>
                            <p>
                              Eveniet assumenda natus eius accusamus qui assumenda ipsam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>);
}

export default Help;