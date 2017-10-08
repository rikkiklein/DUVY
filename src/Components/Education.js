import React, { Component } from 'react';
import nyu                  from '../CSS/nyu.png';
import bc                   from '../CSS/bc.png';
import touro                from '../CSS/touro.jpg';

class Education extends Component {
  render() {
    return (
      <section id="education">
        Education
        <div className="education-flex">
          <div className="pics">
            <img id="ed-logo" src={nyu} />
            <span id="ed-outer">
              <div id="ed-stick"></div>
            </span>
            <img id="ed-logo" src={bc} />
            <span id="ed-outer">
              <div id="ed-stick"></div>
            </span>
            <img id="ed-logo" src={touro} />
          </div>
          <div className="info">
            <div className="inner-info">
            The Polytechnic Institute of New York University
            Degree NameBachelor’s Degree Field Of StudyCivil Engineering Grade3.73
            Dates attended or expected graduation 2014 – 2016
            Activities and Societies: Tau Beta Pi (National Engineering Honor Society), American Society of Civil Engineers (ASCE)
            Courses: Statics, Structural Analysis, Structural Dynamics, Mechanics of Materials, Materials Engineering, Fluid Mechanics, Water Resources Engineering, Introduction to Transportation Systems,
            Transportation Engineering
            Software: Excel, Word, AutoCAD, SAP, Revit, C ++, ArcGIS
              <a href="http://engineering.nyu.edu/academics/programs/civil-engineering-bs" target="_blank">Learn More...</a>
            </div>
            <div className="inner-info">
              Brooklyn College
              Structural and geotechnical engineering
              Environmental and water resources engineering
              Transportation engineering and construction management
            </div>
            <div className="inner-info">
            Touro College
            Field Of StudyMathematics and Statistics Grade3.93
            Dates attended or expected graduation 2009 – 2011
            Calculus I, Calculus II, Multi-variable Calculus, Finite Mathamatics, Probability Theory, Mathematics of Compound Interest, Linear Algebra, Differential Equations, Quantitative Analysis, Statistics, Operations Research, Numerical Methods

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
