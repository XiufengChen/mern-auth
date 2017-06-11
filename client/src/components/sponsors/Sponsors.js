import React, { Component } from 'react';

export default class Sponsors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ut-pages__content ut-bg--light-dark">
        <section className="ly-section section--dark">
          <div className="container">
            <div className="ut-student__title d-flex">
              <h1>Sponsors</h1>
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
                We invite you to join us by supporting the TFAS 50th Anniversary
                Fund. Our mission has never been more timely than it is today,
                with America and the world in need of honorable leaders committed
                to freedom’s first principles.
              </p>
              <p>
                To make a gift by mail, send your check made out to The Fund for
                American Studies to 1706 New Hampshire Avenue NW, Washington, DC
                20009. To make a gift by phone, call Ed Turner at 202-986-0384.
              </p>
            </div>
          </div>
        </section>
        <section className="ly-section">
          <div className="container">
            <div className="ut-student__sponsors">
              <div className="ut-sponsors__title d-flex">
                <h1 className="mx-auto">MEMBER UNIVERSITIES</h1>
              </div>
              <div className="row">
                <div className="col ut-sponsors__card">
                </div>
                <div className="col ut-sponsors__card">
                </div>
                <div className="col ut-sponsors__card">
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
