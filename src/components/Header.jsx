import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navActions from '../actions/navActions';
import CSSModules from 'react-css-modules';
import styles from '../assets/stylesheets/header.scss';

class Header extends React.Component {
  render() {
    const { toggleNav } = this.props.actions;
    return (
      <div styleName="container" onClick={toggleNav}>
        <h1 styleName="hvrnk">hvrnk</h1>
        <div styleName="nav-container">
          <Link to ='/' styleName="nav-link">Home</Link>
          <Link to ='/about' styleName="nav-link">About</Link>
          <Link to ='/contact' styleName="nav-link">Contact</Link>
        </div>
        <div styleName="transparent-overlay"></div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(navActions, dispatch);
  return {
    actions
  };
}

export default connect(null, mapDispatchToProps)(CSSModules(Header, styles));