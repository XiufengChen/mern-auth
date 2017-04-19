import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header className="ut__header" id="bootstrap-overrides">
        <nav className="navbar navbar-static-top ut-navbar" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to='/'>UNITTASK</Link>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a
                    href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false">
                    ABOUT
                  </a>
                  <div className="dropdown-menu">
                    <div className="container">
                      <ul className="row">
                        <li className="col-xs-3">
                          <h5>ABOUT US</h5>
                          <ul className="topNavCol">
                            <li><Link to="/about/#what-we-do">WHAT WE DO</Link></li>
                            <li><Link to="/about/#mession">MISSION</Link></li>
                            <li><Link to="/about/#team">TEAM</Link></li>
                          </ul>
                        </li>
                        <li className="col-xs-3">
                          <h5>CONTACT US</h5>
                          <ul className="topNavCol">
                            <li><Link to="/about/#contact-us">CONTACT US</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false">
                    STUDENTS
                  </a>
                  <div className="dropdown-menu">
                    <div className="container">
                      <ul className="row">
                        <li className="col-xs-3">
                          <h5>STUDENTS</h5>
                          <ul className="topNavCol">
                            <li><Link to="/students#prospective">PROSPECTIVE</Link></li>
                            <li><Link to="/students#university">UNIVERSITY CHAPTERS</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false">
                    START UPS
                  </a>
                  <div className="dropdown-menu">
                    <div className="container">
                      <ul className="row">
                        <li className="col-xs-3">
                          <h5>START UPS</h5>
                          <ul className="topNavCol">
                            <li><Link to="/startups#become-parnters">BECOME PARTNERS</Link></li>
                            <li><Link to="/startups#view-students">VIEW STUDENTS</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false">
                    SPONSORS
                  </a>
                  <div className="dropdown-menu">
                    <div className="container">
                      <ul className="row">
                        <li className="col-xs-3">
                          <h5>SPONSORS</h5>
                          <ul className="topNavCol">
                            <li><Link to="/sponsors#donate">DONATE</Link></li>
                            <li><Link to="/sponsors#why-get-involved">WHY GET INVOLVED</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to='/signin'>SIGN IN</Link></li>
              </ul>
            </div>

          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
