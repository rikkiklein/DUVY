import React, { Component } from 'react';
import MathResume           from './MathResume.js';
import EngineerResume       from './EngineerResume.js';
import MartialResume        from './MartialResume.js';

class TabContent extends Component {

  render() {
    return (
      <div>
       {this.props.activeTab.name === 'Civil Engineer'  ? <EngineerResume/> :null}
       {this.props.activeTab.name === 'Mathematics'     ? <MathResume/> :null}
       {this.props.activeTab.name === 'Martial Arts'    ? <MartialResume/> :null}

      </div>
    );
  }
}

export default TabContent;
