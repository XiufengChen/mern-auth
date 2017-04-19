import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="ut__footer">
        <div className="container">
          <div className="mailing-address pull-left">
            100 Institute st. Worcester, MA
          </div>
          <div className="social-area pull-right">
            <a className="btn btn-social btn-facebook btn-simple" href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a className="btn btn-social btn-twitter btn-simple" href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="copyright">
            © 2017 UNITTASK
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
