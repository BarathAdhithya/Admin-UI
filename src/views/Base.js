import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'
import ProfileBar from './ProfileBar';
import MainContent from './MainContent'

export class Home extends Component {
	static propTypes = {
		name: PropTypes.string,
	}

	render() {
		return (
			<div class="base">
				<NavBar />
				<ProfileBar />
				<MainContent />
			</div>
		)
	}
}

export default Home
