import React, { Component } from 'react';
import TabContent           from './TabContent.js';
import Tabs                 from './Tabs.js';

var tabData = [
  {name: 'Civil Engineer'},
  {name: 'Martial Artist'},
  {name: 'Projects'},
];

class MoreInfo extends Component {

  constructor(props){
    super(props);
    this.state=({
      activeTab: tabData[0],
    })
  }

  handleClick(tab, link){
    this.setState({
      activeTab: tab,
    })
  }

  render() {
    return (
      <section id="about" className="resume">
      More Information
        <div className="tabs">
          <Tabs activeTab={this.state.activeTab} changeTab={this.handleClick.bind(this)}  tabData={tabData} />
          <div className="padding">
            <TabContent activeTab={this.state.activeTab} />
          </div>
        </div>
      </section>
    );
  }
}

export default MoreInfo;
