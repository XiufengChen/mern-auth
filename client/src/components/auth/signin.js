import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({emailValue: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({passwordValue: e.target.value});
  }

  handleFormSubmit(e) {
    e.preventDefault();
    // Need to do something to log user in
    this.props.signinUser({ email: this.state.emailValue, password: this.state.passwordValue });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger col-4 offset-sm-4">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="ut-pages__content ut-bg--light-dark">
        <div className="ut-login__wrapper">
          <div className="container">
            <form onSubmit={this.handleFormSubmit.bind(this)}>
              <div className="form-group row">
                <label htmlFor="inputEmail"className="col-sm-2 offset-sm-2 col-form-label">Email:</label>
                <div className="col-sm-4">
                  <input value={this.state.emailValue} id="inputEmail" className="form-control" placeholder="Email" onChange={this.handleEmailChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 offset-sm-2 col-form-label">Password:</label>
                <div className="col-sm-4">
                  <input value={this.state.passwordValue} id="inputPassword" className="form-control" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                </div>
              </div>
              {this.renderAlert()}
              <div className="form-group row">
                <div className="offset-sm-4 col-sm-4">
                  <button action="submit" className="btn btn-default ut-login__btn">SIGN IN</button>
                  <Link id="ut-login__a" className="btn btn-link ml-lg-4" to='/signup' key={2}>Create an account?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

// First params is object for configuration, second for Component
export default connect(mapStateToProps, actions)(Signin)
