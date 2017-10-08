import React, { Component } from 'react';

class MenuBar extends Component {
  render() {
    return (
			<div id="menu-bar">
				<ul>
					<li><a href="#resume">Resumes</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">More Info</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
    );
  }
}

export default MenuBar;
