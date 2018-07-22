import React, { Component, PureComponent } from 'react';




class Newsletter extends PureComponent {
  render() {
    return (<section id='newsletter' className='text-center p-5 bg-dark text-white my-4'>
              <div className='container'>
                <div className='row'>
                  <div className='col'>
                    <h1>Signup For Our Newsletter</h1>
                    <p>Deleniti consequatur officia unde nobis autem quasi rem. Qui commodi tenetur rerum. Assumenda modi sed numquam rem. Laborum voluptatem consequatur. Excepturi
                      mollitia sit omnis. Voluptatum quam debitis nihil et delectus et quidem.</p>
                    <form className='form-inline justify-content-center'>
                      <label className='sr-only' htmlFor='name'>Name</label>
                      <input type='text' className='form-control mb-2 mr-sm-2 mb-sm-0' placeholder='Enter Name' />
                      <label className='sr-only' htmlFor='email'>Email</label>
                      <input type='text' className='form-control mb-2 mr-sm-2 mb-sm-0' placeholder='Enter Email' />
                      <button className='button-universal btn btn-danger' type='submit'>Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </section>);
  }
}

export default Newsletter;