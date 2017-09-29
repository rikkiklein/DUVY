import React, { Component } from 'react';
import Projects             from './Projects.js';

class TabContent extends Component {

  render() {
    return (
      <div>
       {this.props.activeTab.name === 'Civil Engineer'   ? "civil engineer information here":null}
       {this.props.activeTab.name === 'Projects'         ? <Projects/> :null}
       {this.props.activeTab.name === 'Martial Artist'   ? "martial artist here" :null}

      </div>
    );
  }
}

export default TabContent;
