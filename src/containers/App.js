import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CSSModules from 'react-css-modules';
import styles from '../assets/stylesheets/app.scss';
import '../assets/stylesheets/base.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div styleName="app-container">
        <div styleName="app-underlay"></div>
        <Header />
        <div styleName="content-container">
          <div styleName="content">
            {this.props.children}
          </div>
          <div styleName="content-underlay"></div>
        </div>
        <Footer />
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
