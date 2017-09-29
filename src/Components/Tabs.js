import React, { Component } from 'react';
import Tab                   from './Tab.js';

class Tabs extends Component {

  render() {
    let tabData = this.props.tabData;
    return (
      <ul className="nav nav-tabs">
       {tabData.map(((tab, index) => {
         return (<Tab data={tab} isActive={this.props.activeTab === tab} handleClick={this.props.changeTab.bind(this,tab)} key={index} />);
       }).bind(this))}
     </ul>
    );
  }
}

export default Tabs;
