import React, { Component } from 'react';

class EngineerResume extends Component {

  render() {
    return (
      <section id="resume" className="resume">
        <div className="res-type">DAVID KLEIN, EIT</div>
        <div className="res-title">EDUCATION</div>
        <div className="res-info">
          <div className="res-info-title">
            <span>
              <span className="res-bold">NYU Tandon School of Engineering</span><br/>
              Bachelor of Science in Civil Engineering
            </span>
            <span className="res-date">
              Brooklyn, New York <br/>
              January 2013-December 2016
            </span>
          </div>
          <div className="res-degree">
            Minor: Construction Management <br/>
            GPA: 3.27 <br/>
            Passed FE Exam: January 25, 2017
          </div>
        </div>
        <div className="res-title">RELEVANT COURSES & PROJECTS</div>
        <div className="res-info">
          <div className="res-bold">Leonardo Da Vinci’s Swing Bridge Project: </div>
          <ul>
            <li>Design of a 15th century wooden swing bridge</li>
            <li>Conducted analysis and design of the bridge using FEA software </li>
          </ul>
          <div className="res-bold">Timber and Masonry Design: </div>
          <ul>
            <li>Design of a two-story office building comprised of timber and masonry</li>
            <li>Conducted analysis and design of joists, girders, columns, walls, lintels, and connections</li>
          </ul>
          <div className="res-bold">Senior Civil Design Project:</div>
          <ul>
            <li>Voted design team leader by peers</li>
            <li>Coordinated with the project CM to design and prepare a complete site development package</li>
            <li>Grading, drainage, stormwater management, wastewater/water supply, street design, sediment & erosion control</li>
          </ul>
          <div className="res-bold">Senior Structural Design Project:</div>
          <ul>
            <li>Developed a complete structural framing system for a16-story reinforced concrete apartment building</li>
            <li>Conducted analysis and design of the system using FEA software</li>
            <li>Prepared engineering design computations, construction drawings, and specifications</li>
          </ul>
          <div className="res-bold">OSHA 10 Hour Construction: OEC-11617657</div>
        </div>
        <div className="res-title">EXPERIENCE</div>
        <div className="res-info">
          <div className="res-info-title">
            <span>
              <span className="res-bold">Mega Contracting Group</span><br/>
              Assistant Project Manager
            </span>
            <span className="res-date">
              Astoria, New York<br/>
              May 2017-Present
            </span>
          </div>
          <ul>
            <li>Handles all submittals, RFI’s, change orders, purchase orders, and meeting minutes </li>
            <li>Assists in creating project schedule, and take-offs for all project material </li>
            <li>Maintains coordination between trades, architect, engineer, and owners </li>
          </ul>

          <div className="res-info-title">
            <span>
              <span className="res-bold"> Yaakov Stern, P.E., Consulting Engineers</span><br/>
              Structural Engineer Intern
            </span>
            <span className="res-date">
              Brooklyn, New York<br/>
              Summer 2015
            </span>
          </div>
          <ul>
            <li>Drafted structural plans, sections and details</li>
            <li>Reviewed calculations and plans at various levels of development</li>
          </ul>
        </div>
        <div className="res-title">TECHNICAL SKILLS</div>
          <div className="res-info">
            Microsoft Office, AutoCAD, Revit, ETABS, SAP, SAGE 300, Primavera P6, SAFE
          </div>
          <div className="res-title">ACTIVITIES & HONORS</div>
          <div className="res-info">
          <div className="res-info-title">
            <span>
              <span className="res-bold">Chi Epsilon </span> <br/>(National Civil Engineering Honor Society) - Tutor
            </span>
            <span className="res-date">
              December 2015-Present
            </span>
          </div>
          <div className="res-info-title">
            <span>
              <span className="res-bold">Tau Beta Pi </span> <br/>(National Engineering Honor Society) - Project Creator/Leader -“Tandon: In The Know”
            </span>
            <span className="res-date">
              April 2015-Present
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default EngineerResume;
