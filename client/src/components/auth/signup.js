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
            <form OnSubmit={this.handleFormSubmit.bind(this)}>
              <div className="form-group row">
                <label htmlFor="inputEmail" className="col-sm-2 offset-sm-2 control-form-label">Email:</label>
                <div className="col-sm-4">
                  <input value={this.state.emailValue} id="inputEmail" className="form-control" placeholder="Email" onChange={this.handleEmailChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 offset-sm-2 control-form-label">Password:</label>
                <div className="col-sm-4">
                  <input value={this.state.passwordValue} id="inputPassword" className="form-control" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 offset-sm-2 control-form-label">Confirm Password:</label>
                <div className="col-sm-4">
                  <input value={this.state.confirmPasswordValue} id="inputPassword" className="form-control" type="password" placeholder="Password" onChange={this.handleConfirmPasswordChange} />
                </div>
              </div>
              <div className="form-group row">
                <div className="offset-sm-4 col-sm-10">
                  <button action="submit" className="btn btn-default ut-login__btn">Sign up</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Signup);
