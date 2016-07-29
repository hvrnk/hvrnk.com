import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../assets/stylesheets/header.scss';

class Header extends React.Component {
  render() {
    return (
      <div styleName="container">
        <h1 styleName="hvrnk">hvrnk</h1>
      </div>
    )
  }
}

export default CSSModules(Header, styles);