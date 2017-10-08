import React, { Component } from 'react';
import MenuBar              from './MenuBar.js';
import Resume               from './Resume.js';
import Banner               from './Banner.js';
import Projects             from './Projects.js';
import MoreInfo             from './MoreInfo.js';
import Contact              from './Contact.js';
import Education            from './Education.js';
import '../CSS/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="main">
          <Banner/>
          <MenuBar/>
          <Resume/>
          <Education/>
          <Projects/>
          <MoreInfo/>
          <Contact/>
        </div>
        <i className="fa fa-github" aria-hidden="true"></i>

      </div>
    );
  }
}

export default App;
