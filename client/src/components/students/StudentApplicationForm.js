import React, { Component } from 'react';

export default class BusinessApplicationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="ut-student__apply row">
          <div className="col-md-12">
            <form className="ut-student__form">
              <div className="form-group row">
                <div className="offset-1 col ut-form__title">
                  <h1>Student Application</h1>
                </div>
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
                <label className="offset-1 col-5" htmlFor="inputFirstName">First Name</label>
                <label className="col-5" htmlFor="inputLastName">Last Name</label>
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
                <label htmlFor="inputStreetAddress" className="offset-1 col-5">Address Line 1</label>
                <label htmlFor="inputAddressLine2" className="col-5">Address Line 2 (Optional)</label>
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
              </div>
              <div className="row">
                <label htmlFor="inputZipCode" className="offset-1 col-5">Postal | Zip Code</label>
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
                <div className="offset-1 col-5">
                  <input id="inputUniversity" className="form-control" />
                </div>
                <div className="col-5">
                  <input id="inputMajor" className="form-control" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputUniversity" className="offset-1 col-5">University</label>
                <label htmlFor="inputMajor" className="col-5">Major</label>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-5">
                  <input id="inputTerm" className="form-control" />
                </div>
                <div className="col-5">
                  <input id="inputDate" className="form-control" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputTerm" className="offset-1 col-5">Current Term</label>
                <label htmlFor="inputDate" className="col-5">Degree Completion Date</label>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-10">
                  <label htmlFor="attachment">Attachment (Resume)</label>
                  <input className="form-control" id="attachment" type="file" />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-10">
                  <label htmlFor="textareaProject">Tell us about a project that you've recently worked on. Provide as much detail as possible.</label>
                  <textarea className="form-control" id="textareaProject" rows="3"></textarea>
                  <small class="form-text text-muted">Max Characters 250 words</small>
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
