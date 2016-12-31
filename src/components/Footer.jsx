import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../assets/stylesheets/footer.scss';

class Footer extends Component {
  render() {
    return (
      <div styleName="container">
        words for now
      </div>
    );
  }
}

export default CSSModules(Footer, styles);