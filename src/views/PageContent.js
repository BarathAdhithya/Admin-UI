import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Course from './Course';
import Event from './Event';
import Administration from './Administration';
import { history } from '../js/location'

export class PageContent extends Component {
  render() {
    return (
      <div class="page-content">
        <h1> page contentpage contentpage contentpage contentpage contentpage contentpage contentpage contentpage contentpage contentpage contentpage contentpage contentpage contentpage contentpage content </h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/course" component={Course} />
          <Route path="/event" component={Event} />
          <Route
            path="/administration/"
            component={(props) => <Administration {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default PageContent;
