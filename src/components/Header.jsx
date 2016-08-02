import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { bindActionCreators } from 'redux';
import styles from '../assets/stylesheets/header.scss';
import * as navActions from '../actions/navActions';

class Header extends React.Component {
  render() {
    const { toggleNav } = this.props.actions;
    return (
      <div styleName="container" onClick={toggleNav}>
        <h1 styleName="hvrnk">hvrnk</h1>
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