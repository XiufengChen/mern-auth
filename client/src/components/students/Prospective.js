import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class Prospective extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ut-pages__content ut-bg--light-dark">
        <section className="ly-section section--dark">
          <div className="container">
            <div className="ut-student__title d-flex">
              <h1>STUDENT PROSPECTIVE</h1>
              <button className="btn btn default ut-login__btn ml-auto">SUBMIT AN APPLICATION FORM</button>
            </div>
          </div>
        </section>
        <section className="ly-section">
          <div className="container">
            <div className="ut-student__desc">
              <h3>
                Description
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                 sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                 vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                 Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                 elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                 eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                 feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                 Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
                pulvinar, hendrerit id, lorem. Maecenas nec
                 odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                  ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                   amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue
                   velit cursus nunc,
              </p>
            </div>
          </div>
        </section>
        <section className="ly-section" id="student-application">
          <div className="container">
            <div className="ut-student__apply row">
              <div className="col-md-8">
                <form className="ut-student__form">
                  <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-2 offset-sm-2 col-form-label">Name:</label>
                    <div className="col-sm-4">
                      <input id="inputName" className="form-control" placeholder="Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputUniversity" className="col-sm-2 offset-sm-2 col-form-label">University</label>
                    <div className="col-sm-4">
                      <input id="inputUniversity" className="form-control" placeholder="University" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputDegree" className="col-sm-2 offset-sm-2 col-form-label">Degree</label>
                    <div className="col-sm-4">
                      <input id="inputDegree" className="form-control" placeholder="Degree" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputGraduateDate" className="col-sm-2 offset-sm-2 col-form-label">Graduate Date</label>
                    <div className="col-sm-4">
                      <input id="inputGraduateDate" className="form-control" placeholder="Graduate Date" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="offset-sm-4 col-sm-4">
                      <button action="submit" className="btn btn-default ut-login__btn">APPLY</button>
                      <Link id="ut-login__a" className="btn btn-link ml-lg-4" to='/signup'></Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {  };
}

// First params is object for configuration, second for Component
export default connect(mapStateToProps, actions)(Prospective);
