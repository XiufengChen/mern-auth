import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="ut__footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <div className="mailing-address pull-left">
                100 Institute Road Worcester, MA 01609
              </div>
            </div>
            <div className="col-xs-4">
              <div className="copyright">
                © 2017 UNITTASK
              </div>
            </div>
            <div className="col-xs-4">
              <div className="social-area pull-right">
                <a href="#">
                  <i className="fa fa-facebook-square" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
