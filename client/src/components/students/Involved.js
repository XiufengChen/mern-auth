import React, { Component } from 'react';

export default class Involved extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ut-pages__content ut-bg--light-dark">
        <section className="ly-section section--dark">
          <div className="container">
            <div className="ut-student__title d-flex">
              <h1>Why Get Involved</h1>
            </div>
            <p className="ut-student__subtitle">Gain valuable experience</p>
          </div>
        </section>
        <section className="ly-section">
          <div className="container">
            <div className="ut-student__desc">
              <h3>
                Description
              </h3>
              <p>
                Gain valuable experience performing work assignments so that you
                remain relevant in the workplace while you complete your studies.
                There is no need to fear of missing out because of your internship.
                We aren’t demanding of your schedule and understand that you lead
                a busy life in your studies and other extracurricular activities.
                We only require 5-hours of your time weekly.
              </p>
            </div>
          </div>
        </section>
        <section className="ly-section">
          <div className="container">
            <div className="row">
              <img src="../../../images/diagram2.png" className="col" alt="UNITTASK" />
            </div>
          </div>
        </section>
        <section className="ly-section">
          <div className="container">
            <div className="ut-student__desc">
              <p>
                Make significant contributions by executing unit-tasks for diverse
                business practice areas that are re-shaping and re-defining the
                business landscape. An internship is the single most important
                credential for recent college graduates to have on their resume
                in the job search among all industry segments. You will gain the
                potential to earn 6.5x more as a result of completing an internship
                while in school. While you complete your studies and job search
                fill your gaps with unit-tasks.
              </p>
              <button className="btn btn-default ut-login__btn">JOIN US</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
