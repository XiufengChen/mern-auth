import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: '',
      confirmPasswordValue: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({emailValue: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({passwordValue: e.target.value});
  }

  handleConfirmPasswordChange(e) {
    this.setState({confirmPasswordValue: e.target.value});
  }

  handleFormSubmit(e) {
    e.preventDefault();
    // Need to do something to log user in

  }

  render() {
    return (
      <div className="ut-pages__content ut-bg--light-dark">
        <div className="ut-login__wrapper">
          <div className="container">
            <div className="row">
              <form className="form-horizontal ut-login__box" onSubmit={this.handleFormSubmit.bind(this)}>
                <fieldset className="form-group">
                  <label className="col-sm-2 col-sm-offset-2 control-label">Email:</label>
                  <div className="col-sm-4">
                    <input value={this.state.emailValue} className="form-control" placeholder="Email" onChange={this.handleEmailChange} />
                  </div>
                </fieldset>
                <fieldset className="form-group">
                  <label className="col-sm-2 col-sm-offset-2 control-label">Password:</label>
                  <div className="col-sm-4">
                    <input value={this.state.passwordValue} className="form-control" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                  </div>
                </fieldset>
                <fieldset className="form-group">
                  <label className="col-sm-2 col-sm-offset-2 control-label">Confirm Password:</label>
                  <div className="col-sm-4">
                    <input value={this.state.confirmPasswordValue} className="form-control" type="password" placeholder="Password" onChange={this.handleConfirmPasswordChange} />
                  </div>
                </fieldset>
                <div className="form-group">
                  <div className="col-sm-offset-4 col-sm-10">
                    <button action="submit" className="btn btn-default">Sign up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Signup);
