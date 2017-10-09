import React, { Component } from 'react';

class MartialResume extends Component {

  render() {
    return (
      <section className="resume">
      <div className="res-type">SENSEI DAVID KLEIN </div>
      <div className="res-title">EDUCATION</div>
      <div className="res-info">
        <div className="res-info-title">
          <span>
            <span className="res-bold">Tora Dojo</span>
            – First Degree Black Belt
            </span>
          <span className="res-date">
            Brooklyn, New York
          </span>
        </div>
        <ul>
          <li>Shotokan based Martial Art (8 Years)</li>
          <li>Studied under Masters Jeffery Glanz and Jack Newman</li>
          <li>	Perfected stances, various kicks and hand techniques, kata, and sparring</li>
        </ul>
      </div>

      <div className="res-info">
        <div className="res-info-title">
          <span>
            <span className="res-bold">Systema</span>
          </span>
          <span className="res-date">
            Jerusalem, Israel
          </span>
        </div>
        <ul>
          <li>Russian Martial Art (3 Years)</li>
          <li>Learned hand-to-hand combat, grappling, knife fighting</li>
          <li>Gained knowledge of breathing, relaxation, and fluidity of movement while in a pressurized environment</li>
        </ul>
      </div>

      <div className="res-info">
        <div className="res-info-title">
          <span>
            <span className="res-bold">MCMAP</span>
          </span>
          <span className="res-date">
            Jerusalem, Israel
          </span>
        </div>
        <ul>
          <li>Marine Corps Martial Arts Program  (1 Year)</li>
          <li>Studied under Recon Marine David Stern</li>
          <li>Focused on hand-to-hand and close quarters combat techniques</li>
        </ul>
      </div>

      <div className="res-info">
        <div className="res-info-title">
          <span>
            <span className="res-bold">Boxing</span>
          </span>
          <span className="res-date">
            Brooklyn, New York
          </span>
        </div>
        <ul>
          <li>Studied at the Underground Boxing Gym under Ilia Mesishchev (3 months)</li>
          <li>Focused on agility, footwork, and punching power</li>
        </ul>
      </div>

      <div className="res-title">EXPERIENCE</div>

      <div className="res-info">
        <div className="res-info-title">
          <span>
            <span className="res-bold">Boro Park YM-YWHA</span> <br/>
            Lead Martial Arts Instructor
          </span>
          <span className="res-date">
            Brooklyn, New York <br/>
            September 2013-Present
          </span>
        </div>
        <ul>
          <li>Guide and develop students’ (children & adults) discipline, focus, confidence, and ability to protect oneself</li>
          <li>Teaching emphasis is placed on Systema with a mixture of other arts</li>
          <li>Lead military-style battlefield simulation exercises </li>
          <li>Lead Insanity Cardio Fitness class</li>
        </ul>
      </div>

      <div className="res-info">
        <div className="res-info-title">
          <span>
            <span className="res-bold">Bring The Gym To Me</span> <br/>
            Martial Arts Instructor
          </span>
          <span className="res-date">
            Brooklyn, New York <br/>
            September 2016-June 2017
          </span>
        </div>
        <ul>
          <li>Program geared for children with ADD</li>
          <li>Taught self-defense techniques and movements</li>
        </ul>
      </div>

      <div className="res-info">
        <div className="res-info-title">
          <span>
            <span className="res-bold">YALA </span> <br/>
            Martial Arts Instructor
          </span>
          <span className="res-date">
            Brooklyn, New York <br/>
            September 2013-August 2013
          </span>
        </div>
        <ul>
          <li>Program geared for children with special needs</li>
          <li>Taught Tora Dojo to 8 children</li>
        </ul>
      </div>

      <div className="res-info">
        <div className="res-info-title">
          <span>
            <span className="res-bold">Camp Nageela Midwest</span> <br/>
            Martial Arts Instructor
          </span>
          <span className="res-date">
            Marshall, Indiana <br/>
            Summers 2009-2016
          </span>
        </div>
        <ul>
          <li>Taught Tora Dojo</li>
          <li>Led military-style battlefield simulation exercises</li>
          <li>Led Insanity Cardio Fitness classes</li>
        </ul>
      </div>
      </section>
    );
  }
}

export default MartialResume;
