import './footer-bar.scss';


import React, { Component } from 'react'

export class FooterBar extends Component {
  render() {
    return (
      <div className="container">
        <a className="logo-font" href="#/">SocialPedia</a>
        <span className="attribution">
          © 2020.
          An interactive learning project from <a href="#/">Thinkster</a>.
          Code licensed under MIT.
        </span>
      </div>
    );
  }
}


export default FooterBar;
