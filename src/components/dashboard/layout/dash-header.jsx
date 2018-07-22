import React, { Component, Fragment, PureComponent } from 'react';



class DashHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      console.log('it successfully loaded the resource');
    } catch (error) {
      console.log(error);
    }
  }
  

  componentWillUnmount() {

  }

  render() {
    return (<Fragment>
      <style>
        { `
          .searchbox {
            justify-content: space-around;
            background: #fff;
            align-items: center;
            box-shadow: 0px 5px 15px rgba(70,0,0,0.3);
          }

          .input-group-addon {
            background-color: #E63054;
            color: #fff;
            vertical-align: center;
            padding: 10px;
            font-size: 20px;
            line-height: 1.4em;
            
          }
          ` }
      </style>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
          </div>
          <div className='col-md-4'>
            <div className='searchbox'>
              <form action=''>
                <div className="input-group">
                  <input type='text' className='form-control' placeholder='search' aria-describedby='basic-addon1' />
                  <span className="input-group-addon" id="basic-addon1"><i className="fa fa-search"></i></span>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-4'>
            <a href=''>
              <h4>Random User</h4>
            </a>
          </div>
                  
        </div>
      </div>
    </Fragment>);
  }
}

export default DashHeader;