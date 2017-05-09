import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="ut-home__content cover-image-full-nav">
        <div className="ut-home ut-home__slogan">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-5">
                <div className="rw-words">
                  <div className="rw-change">
                    <div className="rw-item">
                      <h2>GROW YOUR BUSINESS</h2>
                    </div>
                    <div className="rw-item">
                      <h2>START YOUR CAREER</h2>
                    </div>
                  </div>
                  <h2>ONE TASK AT A TIME</h2>
                  <p>
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <div className="ut-home__signin">
                    <Link id="ut-login__a" className="btn btn-default ut-login__btn" to='/signin'>SIGN IN</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
