import React, { Component } from 'react';
import ProfileBar from './ProfileBar';
import PageContent from './PageContent';

export class MainContent extends Component {
  render() {
    return (
      <div class="main-content--wrap">
        <div class="main-content">
          <PageContent />
        </div>
      </div>
    );
  }
}

export default MainContent;
