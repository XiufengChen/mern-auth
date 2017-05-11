import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div className="ut-pages__content">
        <section id="what-we-do" className="about-banner">
          <div className="container">
            <h1>WHAT WE DO</h1>
            <h3 className="about-banner__desc">
              Lorem Ipsum has been the industry
              standard dummy text ever since the 1500
            </h3>
            <ul className="about-banner__parallel clearfix">
              <li>
                <div className="about-banner__parallel__image-step">
                </div>
                <div className="about-banner__parallel__intro">
                  <h4>
                    <Link to="/startups">START UPS</Link>
                  </h4>
                  <p>
                    Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500
                  </p>
                </div>
              </li>
              <li>
                <div className="about-banner__parallel__image-block">
                </div>
                <div className="about-banner__parallel__intro">
                <h4>
                  <Link to="/students">STUDENTS</Link>
                </h4>
                <p>
                  Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500
                </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section id="mission" className="about-banner">
          <div className="container">
            <h1>MISSION</h1>
            <h3 className="about-banner__desc">
              Lorem Ipsum has been the industry
              standard dummy text ever since the 1500
            </h3>
            <div className="about-banner__vertical">
            </div>
          </div>
        </section>
        <section id="team" className="about-banner">
          <div className="container">
            <h1>TEAM</h1>
            <ul className="clearfix">
              <li>
                <div className="ut-about__photo">
                </div>
                <div className="ut-about__title">
                </div>
              </li>
              <li>
                <div className="ut-about__photo">
                </div>
                <div className="ut-about__title">
                <h3>CEO</h3>
                </div>
              </li>
              <li>
                <div className="ut-about__photo">
                </div>
                <div className="ut-about__title">
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
