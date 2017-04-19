import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // Need to do something to log user in
  }
  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div className="ut-pages__content ut-bg--light-dark">
        <div className="ut-login__wrapper">
          <div className="container">
            <div className="row">
              <form className="form-horizontal ut-login__box" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                  <label className="col-sm-2 col-sm-offset-2 control-label">Email:</label>
                  <div className="col-sm-4">
                    <input {...email} className="form-control" placeholder="Email"/>
                  </div>
                </fieldset>
                <fieldset className="form-group">
                  <label className="col-sm-2 col-sm-offset-2 control-label">Password:</label>
                  <div className="col-sm-4">
                    <input {...password} className="form-control" placeholder="Password"/>
                  </div>
                </fieldset>
                <div className="form-group">
                  <div className="col-sm-offset-4 col-sm-10">
                    <button action="submit" className="btn btn-default">Sign in</button>
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

// First params is object for configuration, second for Component
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
