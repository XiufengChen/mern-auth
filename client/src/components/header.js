import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">SIGN OUT</Link>
        </li>
      );
    } else {
      // show a link to sign in or sign up
      return [
        <li className="nav-item">
          <Link id="ut-login__a" className="btn btn-default ut-login__btn" to='/signin' key={1}>SIGN IN</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <header className="ut-header">
        <nav className="navbar navbar-toggleable-md navbar-inverse navbar-dark">
          <div className="container ut-navbar">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to='/'>
              <img src="../../images/logo.png" width="100" height="54" alt="UNITTASK" />
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown nav-item--static">
                  <a
                    href="#" className="nav-link nav-link--white" data-toggle="dropdown" role="button"
                    aria-expanded="false">
                    ABOUT
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <div className="container">
                      <ul className="row">
                        <li className="col-sm-4">
                          <h5>ABOUT US</h5>
                          <ul>
                            <li className="dropdown-menu-item"><Link to="/about/#what-we-do">WHAT WE DO</Link></li>
                            <li className="dropdown-menu-item"><Link to="/about/#mession">MISSION</Link></li>
                            <li className="dropdown-menu-item"><Link to="/about/#team">TEAM</Link></li>
                          </ul>
                        </li>
                        <li className="col-sm-4">
                          <h5>CONTACT US</h5>
                          <ul className="">
                            <li className="dropdown-menu-item"><Link to="/about/#contact-us">CONTACT US</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown nav-item--static">
                  <a
                    href="#" className="nav-link nav-link--white" data-toggle="dropdown" role="button"
                    aria-expanded="false">
                    STUDENTS
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <div className="container">
                      <ul className="row">
                        <li className="col-sm-4">
                          <h5>STUDENTS</h5>
                          <ul>
                            <li className="dropdown-menu-item"><Link to="/students#prospective">PROSPECTIVE</Link></li>
                            <li className="dropdown-menu-item"><Link to="/students#university">UNIVERSITY CHAPTERS</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown nav-item--static">
                  <a
                    href="#" className="nav-link nav-link--white" data-toggle="dropdown" role="button"
                    aria-expanded="false">
                    START UPS
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <div className="container">
                      <ul className="row">
                        <li className="col-sm-4">
                          <h5>START UPS</h5>
                          <ul>
                            <li className="dropdown-menu-item"><Link to="/startups#become-parnters">BECOME PARTNERS</Link></li>
                            <li className="dropdown-menu-item"><Link to="/startups#view-students">VIEW STUDENTS</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown nav-item--static">
                  <a
                    href="#" className="nav-link nav-link--white" data-toggle="dropdown" role="button"
                    aria-expanded="false">
                    SPONSORS
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <div className="container">
                      <ul className="row">
                        <li className="col-sm-4">
                          <h5>SPONSORS</h5>
                          <ul>
                            <li className="dropdown-menu-item"><Link to="/sponsors#donate">DONATE</Link></li>
                            <li className="dropdown-menu-item"><Link to="/sponsors#why-get-involved">WHY GET INVOLVED</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown nav-item--static">
                  <a
                    href="#" className="nav-link nav-link--white" data-toggle="dropdown" role="button"
                    aria-expanded="false">
                    MEDIA
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <div className="container">
                      <ul className="row">
                        <li className="col-sm-4">
                          <h5>MEDIA</h5>
                          <ul>
                            <li className="dropdown-menu-item"><Link to="/about/#what-we-do">WHAT WE DO</Link></li>
                            <li className="dropdown-menu-item"><Link to="/about/#mession">MISSION</Link></li>
                            <li className="dropdown-menu-item"><Link to="/about/#team">TEAM</Link></li>
                          </ul>
                        </li>
                        <li className="col-sm-4">
                          <h5>CONTACT US</h5>
                          <ul>
                            <li className="dropdown-menu-item"><Link to="/about/#contact-us">CONTACT US</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav">
                {this.renderLinks()}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
