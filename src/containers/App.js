import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CSSModules from 'react-css-modules';
import styles from '../assets/stylesheets/app.scss';
import '../assets/stylesheets/base.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <div styleName="app-overlay"></div>
        <Header />
        {this.props.children}
      </div>
    );
  },

  propTypes: {
    children: PropTypes.object
  }
});

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(CSSModules(App, styles));
