import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Administration extends Component {
  constructor(props) {
    super(props);
    this.pageUrl = this.props.match.url;
    this.state = {};
  }
  static propTypes = {};

  componentDidMount() {
    console.log(this.pageUrl);
  }

  render() {
    return (
      <div>
        <h1>
          Administration
        </h1>
      </div>
    );
  }
}

export default Administration;
