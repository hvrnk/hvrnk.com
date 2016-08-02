import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../assets/stylesheets/base.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <Header />
        <NavBar />

        Welcome!
        {' '}
        <Link to='/list'>List Maker</Link>
        {' '}
        <Link to='/about'>About</Link>

        <br /><br />

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

export default connect(mapStateToProps)(App);
