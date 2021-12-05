import React, { Component } from 'react';

export class ProfileBar extends Component {
  render() {
    return (
      <div class="profile-bar--wrap">
        <div class="profile-bar">
          <div class="profile-bar__left">
            <h1 class="profile-bar__page-title"> Dashboard</h1>
          </div>
          <div class="profile-bar__right">
            <p>notification</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileBar;
