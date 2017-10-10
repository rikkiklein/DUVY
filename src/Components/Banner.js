import React, { Component } from 'react';
import image2        from '../CSS/duvy.jpeg';

class Banner extends Component {
  render() {
    return (
      <div id="side-bar">
				<div>
					<div className="image avatar">
            <img src={image2} alt="" />
          </div>
					<h1>David Klein, EIT</h1>
          <div className="contact-flex">
            <a href="https://www.linkedin.com/in/david-klein-71881033/" target="_blank">
              <i className="fa fa-linkedin"></i>DavidKlein
            </a>
            <a href="#"><i className="fa fa-phone"></i> 718-501-3012</a>
            <a href="mailto:davidklein@nyu.edu?Subject=Job%20Inquiry" target="_top">
              <i className="fa fa-envelope-o"></i>davidklein@nyu.edu
            </a>
          </div>
				</div>
			</div>
    );
  }
}

export default Banner;
