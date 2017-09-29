import React, { Component } from 'react';

class MenuBar extends Component {
  render() {
    return (
      <div id="menu-bar">
				<div className="inner">
					<nav>
						<ul>
							<li><a href="#intro">Welcome</a></li>
							<li><a href="#resume">About David</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">What I Do</a></li>
							<li><a href="#contact">Contact Information</a></li>
						</ul>
					</nav>
				</div>
      </div>
    );
  }
}

export default MenuBar;
