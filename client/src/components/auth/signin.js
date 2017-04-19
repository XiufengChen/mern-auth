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
      <div className="container">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <lable>Email:</lable>
            <input {...email} className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <lable>Password:</lable>
            <input {...password} className="form-control" />
          </fieldset>
          <button action="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }
}

// First params is object for configuration, second for Component
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);