import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { NavItem as NavItemComp } from '../components/NavItem';

import { NavItem as NavItemModel, Widget, Image } from '../js/module.js';

import HomeIcon from '../assets/MaterialIcon/home.svg';
import EventIcon from '../assets/MaterialIcon/event.svg';
import CourseIcon from '../assets/MaterialIcon/course.svg';
import AdministrationIcon from '../assets/MaterialIcon/administration.svg';
import ArrowDown from '../assets/MaterialIcon/arrow-down.svg';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.isCurrentPage = this.isCurrentPage.bind(this);
    this.state = {};
  }

  isCurrentPage(path) {
    return this.props.location.pathname === path
  }

  render() {
    const pageRouteList = {
      home: '/',
      course: '/course',
      event: '/event',
      administration: '/administration',
    };

    const navbarItemList = [
      new NavItemModel(
        'Home',
        new Image(HomeIcon, 'home icon'),
        this.isCurrentPage(pageRouteList.home),
        new Widget(),
        pageRouteList.home
      ),
      new NavItemModel(
        'Course',
        new Image(CourseIcon, 'room icon'),
        this.isCurrentPage(pageRouteList.course),
        new Widget(),
        pageRouteList.course
      ),
      new NavItemModel(
        'Event',
        new Image(EventIcon, 'event icon'),
        this.isCurrentPage(pageRouteList.event),
        new Widget(),
        pageRouteList.event
      ),
      new NavItemModel(
        'Administration',
        new Image(AdministrationIcon, 'administrator icon'),
        this.isCurrentPage(pageRouteList.administration),
        new Widget(ArrowDown, 'arrow down'),
        pageRouteList.administration
      ),
    ];

    return (
      <div class="nav-bar">
        <ul>
          {navbarItemList.map((item) => (
            <NavItemComp imgData={item} key={item.name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(NavBar);
