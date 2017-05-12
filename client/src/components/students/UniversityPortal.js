import React, { Component } from 'react';

export default class UniversityPortal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ut-pages__content ut-bg--light-dark">
        <section className="ly-section section--dark">
          <div className="container">
            <div className="ut-student__title d-flex">
              <h1>UNIVERSITY CHAPTER</h1>
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
              <button className="btn btn-default ut-login__btn">JOIN US</button>
            </div>
          </div>
        </section>
        <section className="ly-section">
          <div className="container">
            <div className="ut-student__sponsors">
              <div className="ut-sponsors__title d-flex">
                <h1 className="mx-auto">SPONSORS</h1>
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
