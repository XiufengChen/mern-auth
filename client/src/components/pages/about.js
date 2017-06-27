import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div className="ut-pages__content">
        <section className="about-banner section--overview">
          <div className="ut-overview__title">
            <div className="container">
              <h1>WHAT WE DO</h1>
              <h3 className="about-banner__desc">
                We help firms scale:
                We do, so our parteners can plan
              </h3>
            </div>
          </div>
          <div className="ut-overview__content">
            <div className="container">
              <div className="row">
                <div className="col-8 offset-2">
                  <p>
                    UnittasK Inc. is an advisory project management firm that serves
                    startups, small businesses and not-for-profits. We focus on big
                    impact projects that can be broken down into smaller unit-tasks,
                    then aggregated together to make as a finished product. This
                    process improves efficiency and fast-tracks project completions.
                    This gives our clients ultimate control in reaching strategic
                    milestones with time compression.
                  </p>
                </div>
              </div>
              <div className="row">
                <ul className="about-banner__parallel clearfix">
                  <li>
                    <div className="about-banner__parallel__image-step">
                    </div>
                    <div className="about-banner__parallel__intro">
                      <h4>
                        <Link to="/startups">PARTNERS</Link>
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
            </div>
          </div>
        </section>
        <section className="about-banner section--commit">
          <div className="ut-commit__title">
            <div className="container">
              <h1>OUR COMMITMENT</h1>
            </div>
          </div>
          <div className="ut-commit__content">
            <div className="container">
              <div className="row">
                <div className="col-8 offset-2">
                  <ul>
                    <li>
                      <h3>To Our Partners</h3>
                      <p>
                        As a non-profit-firm, our priority is to provide young firms
                        an opportunity to expand and reach their full potential. Young
                        firms too often are burdened with being under resourced; they
                        have a lot of things that need to be done and lack the capacity
                        to get the necessary work done. Attention to these functional
                        tasks distracts strategic thinking and hampers growth potential.
                        Unittask’s services take care of the functional tasks so that
                        these young firm’s leaders can focus on their growth. We
                        understand emerging firms are short on cash so we provide this
                        service for a negligible administrative cost at no profit.
                      </p>
                    </li>
                    <li>
                      <h3>To Our People</h3>
                      <p>
                        We realizes the need for balance and diversity in learning. We
                        care about Our People’s work-life balance so we aren’t demanding
                        of their schedules. We want Our People to devote their focus
                        to school and other interest while gaining valuable experiences
                        and remaining relevant during their brief hiatus from their
                        careers. This affords Our People an edge against their peers;
                        they gain exposure to different sectors and business practice
                        areas to broaden their horizons. Our People’s efforts make a
                        significant impact for our clients. We award annual scholarships
                        in appreciation for Our People’s commitment to us.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
          </div>
        </section>
        <section className="about-banner section--team">
          <div className="ut-team__title">
            <div className="container">
              <h1>TEAM</h1>
            </div>
          </div>
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
