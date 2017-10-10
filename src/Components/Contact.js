import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
     <section id="contact">
        <a href="https://www.linkedin.com/in/david-klein-71881033/" target="_blank">
          <i className="fa fa-linkedin"></i>{" "}DavidKlein
        </a> <br/>
        <a href="#"><i className="fa fa-phone"></i>{" "}718-501-3012</a><br/>
        <a href="mailto:davidklein@nyu.edu?Subject=Job%20Inquiry" target="_top">
          <i className="fa fa-envelope-o"></i>{" "}davidklein@nyu.edu
        </a>
     </section>
    );
  }
}

export default Contact
