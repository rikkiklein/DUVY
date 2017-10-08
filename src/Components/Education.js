import React, { Component } from 'react';
import nyu                  from '../CSS/nyu3.png';
import touro                from '../CSS/touro2.png';

class Education extends Component {
  render() {
    return (
      <section id="education">
        <span className="title">Education</span>
        <div className="education-flex">
          <div className="pics">
            <img id="ed-logo" src={nyu} />
            <span id="ed-outer">
              <div id="ed-stick"></div>
            </span>
            <img id="ed-logo" src={touro} />
          </div>
          <div className="info">
            <div className="inner-info">
              <div className="ed-title">The Polytechnic Institute of New York University</div>
              <div>Bachelor’s Degree Field Of Study Civil Engineering 2014 – 2016</div>
              <div>Tau Beta Pi (National Engineering Honor Society) & American Society of Civil Engineers (ASCE) </div>
              <a href="http://engineering.nyu.edu/academics/programs/civil-engineering-bs" target="_blank">Learn More...</a>
            </div>
            <div className="inner-info">
              <div className="ed-title">Touro College</div>
              <div>Bachelor’s Degree Field Of Study Civil Engineering 2014 – 2016</div>
              <div>Tau Beta Pi (National Engineering Honor Society) & American Society of Civil Engineers (ASCE) </div>
              <a href="http://engineering.nyu.edu/academics/programs/civil-engineering-bs" target="_blank">Learn More...</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
