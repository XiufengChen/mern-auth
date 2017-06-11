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
                  <h1>Business Application</h1>
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
                <label htmlFor="inputBusinessName" className="col-5">Business Name</label>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-5">
                  <input id="inputAddressLine2" className="form-control" />
                </div>
                <div className="col-5">
                  <input id="inputIndustry" className="form-control" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputAddressLine2" className="offset-1 col-5">Address Line 2</label>
                <label htmlFor="inputIndustry" className="col-5">Industry</label>
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
                  <label htmlFor="textareaSituation">Describe your situation and how you think we can help your achieve your objectives.</label>
                  <textarea className="form-control" id="textareaSituation" rows="3"></textarea>
                  <small class="form-text text-muted">Max Characters 150 words</small>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <div className="offset-1 col-10">
                  <label htmlFor="textareaSituation">Which of the following services do you need us to provide? (Select all that apply)</label>
                </div>
                <div className="offset-1 col-10 row">
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Admin</span>
                  </label>
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">CAD Drawing</span>
                  </label>
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Presentation Material</span>
                  </label>
                </div>
                <div className="offset-1 col-10 row">
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Business Development</span>
                  </label>
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Graphic Design</span>
                  </label>
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Marketing Material</span>
                  </label>
                </div>
                <div className="offset-1 col-10 row">
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Market Research</span>
                  </label>
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Excel Tool Development</span>
                  </label>
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Social Media</span>
                  </label>
                </div>
                <div className="offset-1 col-10 row">
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Data Entry</span>
                  </label>
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">DBS Development</span>
                  </label>
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Software Programming</span>
                  </label>
                </div>
                <div className="offset-1 col-10 row">
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">DataMining/Management</span>
                  </label>
                  <label className="custom-control custom-radio col">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Others(Specify)</span>
                  </label>
                  <label className="custom-control custom-radio col"></label>
                  <input type="text" className="custom-control-input" />
                </div>
              </div>
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
