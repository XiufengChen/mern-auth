import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class UniversityForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="ut-student__apply row">
          <div className="col-md-10">
            <form className="ut-student__form">
              <div className="form-group row">
                <div className="offset-1 col-5">
                  <input id="inputFirstName" className="form-control" />
                </div>
              </div>
              <div className="row">
                <label className="offset-1 col-5" htmlFor="inputFirstName">University</label>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-5">
                  <input id="inputFirstName" className="form-control" />
                </div>
                <div className="col-5">
                  <input id="inputLastName" className="form-control" />
                </div>
              </div>
              <div className="row">
                <label className="offset-1 col-5" htmlFor="inputFirstName">Primary Contact's First Name</label>
                <label className="col-5" htmlFor="inputLastName">Primary Contact's Last Name</label>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-5">
                  <input id="inputStreetAddress" className="form-control" />
                </div>
                <div className="col-5">
                  <input id="inputBusinessName" className="form-control" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputStreetAddress" className="offset-1 col-5">Street Address</label>
                <label htmlFor="inputAddressLine2" className="col-5">Address Line 2</label>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-5">
                  <input id="inputCity" className="form-control" />
                </div>
                <div className="col-5">
                  <input id="inputState" className="form-control" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputCity" className="offset-1 col-5">City</label>
                <label htmlFor="inputState" className="col-5">State | Province | Region</label>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-5">
                  <input id="inputZipCode" className="form-control" />
                </div>
                <div className="col-5">
                  <input id="inputRefer" className="form-control" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputZipCode" className="offset-1 col-5">Postal | Zip Code</label>
                <label htmlFor="inputRefer" className="col-5">How are you get refered to us?</label>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-5">
                  <input id="inputPhone" className="form-control" />
                </div>
                <div className="col-5">
                  <input id="inputEmail" className="form-control" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputPhone" className="offset-1 col-5">Phone Number</label>
                <label htmlFor="inputEmail" className="col-5">Email</label>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-10">
                  <label htmlFor="textareaSituation">Explain why you think you are the right person to introduce Unittask Inc. to your school.</label>
                  <textarea className="form-control" id="textareaSituation" rows="3"></textarea>
                  <small class="form-text text-muted">Max Characters 150 words</small>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-10">
                  <label htmlFor="attachment">Attachment(Resume) </label>
                  <input className="form-control" id="attachment" type="file" />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <div className="row">
                  <label htmlFor="inputPhone" className="offset-1 col-5">Phone Number</label>
                  <label htmlFor="inputEmail" className="col-5">Email</label>
                </div>
                <div className="offset-1 col-10">
                  <label htmlFor="attachment">Attachment(Resume) </label>
                  <input className="form-control" id="attachment" type="file" />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-5">
                  <button action="submit" className="btn btn-default ut-login__btn">APPLY</button>
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
  return {  };
}

// First params is object for configuration, second for Component
export default connect(mapStateToProps, actions)(UniversityForm);
