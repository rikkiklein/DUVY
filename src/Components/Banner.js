import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import image        from '../CSS/pic1.png';
import image2        from '../CSS/duvy.jpeg';

class Banner extends Component {
  render() {
    return (
      <div id="side-bar">
				<div>
					<div className="image avatar">
            <img src={image2} alt="" />
          </div>
					<h1>David Klein EIT</h1>
          <a><i className="fa fa-linkedin"></i></a>
          <a><i className="fa fa-envelope-o"></i></a>
          <a><i className="fa fa-twitter"></i></a>
				</div>
			</div>

    );
  }
}

export default Banner;
