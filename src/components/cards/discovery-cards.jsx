import React from 'react';



const DiscoveryCards = () => {
  return (<section id='discovery' className='py-5'>
            <style>
              {
                `
                .card-content a.spectrum-a {
                  text-decoration: none;
                }
                .card-action {
                  border-top: 1px solid rgba(160, 160, 160, 0.2);
                  padding: 16px;
                }
                
                .card-action a {
                  color: #ffab40;
                  margin-right: 16px;
                  transition: color 0.3s ease;
                  text-transform: uppercase;
                }
                
                .card-action a:hover {
                  color: #ffd8a6;
                  text-decoration: none;
                }
                `
              }
            </style>
            <div className='row'>
                  <article className="col-md-4 col-lg-4">
                    <div className="card-content">
                      <a className="spectrum-a" href="http://uj.ac.za"><img className="spectrum1" src="https://image.freepik.com/free-vector/science-elements-with-test-tubes-and-molecules_23-2147491185.jpg" alt="meow" />
                        <h4 className="spectrum-h4">Spectrum</h4>
                        <p>Visit our world-class analytical facility for South African scientists, Spectrum</p>
                      </a>
                      <div className="card-action">
                        <a href="#" target="new_blank">Link</a>
                        <a href="#" target="new_blank">Link</a>
                      </div>
                    </div>
                  </article>
                  <article className="col-md-4 col-lg-4">
                    <div className="card-content">
                      <a className="spectrum-a" href="http://uj.ac.za"><img className="spectrum1" src="https://image.freepik.com/free-vector/science-elements-with-test-tubes-and-molecules_23-2147491185.jpg" alt="meow" />
                        <h4 className="spectrum-h4">Study With Us</h4>
                        <p>Visit our world-class analytical facility for South African scientists, Spectrum</p>
                      </a>
                      <div className="card-action">
                        <a href="#" target="new_blank">Link</a>
                        <a href="#" target="new_blank">Link</a>
                      </div>
                    </div>
                  </article>
                  <article className="col-md-4 col-lg-4">
                    <div className="card-content">
                      <a className="spectrum-a" href="http://uj.ac.za">
                        <img className="spectrum1" src="https://image.freepik.com/free-vector/science-elements-with-test-tubes-and-molecules_23-2147491185.jpg" alt="meow" />
                        <h4 className="spectrum-h4">Soweto Science Centre</h4>
                        <p>Visit our world-class analytical facility for South African scientists, Spectrum</p>
                      </a>
                      <div className="card-action">
                        <a href="#" target="new_blank">Link</a>
                        <a href="#" target="new_blank">Link</a>
                      </div>
                    </div>
                  </article>
                 </div> 
                
          </section>)
};

export default DiscoveryCards;