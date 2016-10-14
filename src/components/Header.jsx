import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { container, hvrnk } from '../assets/styles/header';
import * as navActions from '../actions/navActions';
// import CSSModules from 'react-css-modules';
// import styles from '../assets/stylesheets/header.scss';

class Header extends React.Component {
  render() {
    const { toggleNav } = this.props.actions;
    return (
      <div style={container} onClick={toggleNav}>
        <h1 style={hvrnk}>hvrnk</h1>
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

export default connect(null, mapDispatchToProps)(Header);