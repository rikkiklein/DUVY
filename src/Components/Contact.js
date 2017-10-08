import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
     <section id="contact">
      Contact
    	<div>
    		<ul className="labeled-icons">
    			<li>
    				<h3 className="icon fa-home"><span className="label">Address</span></h3>
    				1234 Somewhere Rd.<br />
    				Nashville, TN 00000<br />
    				United States
    			</li>
    			<li>
    				<h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
    				000-000-0000
    			</li>
    			<li>
    				<h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
    				<a href="#">hello@untitled.tld</a>
    			</li>
    		</ul>
    	</div>
     </section>
    );
  }
}

export default Contact
