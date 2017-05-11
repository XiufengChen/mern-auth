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
      <div className="ut-pages__content ut-bg--light-dark">

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {  };
}

// First params is object for configuration, second for Component
export default connect(mapStateToProps, actions)(UniversityForm);
