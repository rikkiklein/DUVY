import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div id="intro">
        <div className="inner">
          <h1>David Klein</h1>
          <h2>Civil Engineer</h2>
          <a className="button" href="#about">Learn More</a>
        </div>
      </div>
    );
  }
}

export default Banner;
