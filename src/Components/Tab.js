import React, { Component } from 'react';

class Tab extends Component {

  render() {
    let tab = this.props;
    return (
      <li onClick={tab.handleClick} className={tab.isActive ? "active" : null}>
        <a><span id="menu-item">{tab.data.name}{" "}</span><i className={tab.data.glyph}></i></a>
      </li>
    );
  }
}

export default Tab;
