import React, { Component } from 'react';

class MathResume extends Component {

  render() {
    return (
      <section id="resume" className="resume">
        <div className="res-type">DAVID KLEIN</div>
        <div className="res-title">EDUCATION</div>
        <div className="res-info">
          <div className="res-info-title">
            <span>
              <span className="res-bold">Touro College</span><br/>
              Bachelor of Science in Mathematics Summa Cum Laude
            </span>
            <span className="res-date">
              Brooklyn, New York <br/>
              September 2009-May 2012
            </span>
          </div>
          <div className="res-degree">
            GPA: 3.93 - Summa Cum Laude <br/>
          </div>
        </div>
        <div className="res-title">RELEVANT COURSES & PAPERS</div>
        <div className="res-info">
          <ul>
            <li>Calculus I-III</li>
            <li>Finite Mathematics</li>
            <li>Probability Theory</li>
            <li>Mathematics of Compound Interest</li>
            <li>Linear Algebra</li>
            <li>Quantitative Analysis</li>
            <li>Statistics</li>
            <li>Operations Research</li>
            <li>Numerical Methods</li>
            <li>Differential Equations</li>
          </ul>
        </div>
        <div className="res-info">
        Operations Research Paper:
          <ul>
            <li>Linear Programming</li>
            <li>Queueing Theory</li>
            <li>Project Scheduling</li>
            <li>Decision Analysis</li>
          </ul>
        </div>
        <div className="res-title">EXPERIENCE</div>
        <div className="res-info">
          <div className="res-info-title">
            <span>
              <span className="res-bold">Tutor - Freelance </span><br/>
            </span>
            <span className="res-date">
            January 2013-August 2017
            </span>
          </div>
          <ul>
            <li>Tutored high school and college mathematics</li>
            <li>Assisted approximately 5 students weekly each semester</li>
            <li>Lead regents review sessions for high school students</li>
          </ul>

          <div className="res-info-title">
            <span>
              <span className="res-bold"> Touro College</span><br/>
               Teacher’s Assistant
            </span>
            <span className="res-date">
              September 2012-January 2013
            </span>
          </div>
          <ul>
            <li>Provided academic support to undergraduate students in need of assistance</li>
            <li>Conducted comprehensive test review sessions</li>
            <li>Assisted in grading exams</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default MathResume;
