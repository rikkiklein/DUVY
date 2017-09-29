import React, { Component } from 'react';
import MenuBar              from './MenuBar.js';
import Resume               from './Resume.js';
import Banner               from './Banner.js';
import Projects             from './Projects.js';
import MoreInfo             from './MoreInfo.js';
import Footer               from './Footer.js';
import Contact              from './Contact.js';

import '../CSS/App.css';

class App extends Component {
  render() {
    return (
      <div>
    	 <MenuBar/>
       <div id="wrapper">
  				<Banner/>
					<Resume/>
          <MoreInfo/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
