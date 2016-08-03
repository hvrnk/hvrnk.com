import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from '../assets/stylesheets/navBar.scss'

class NavBar extends React.Component {
  render() {
    const { isOpen } = this.props.nav;
    return (
      <div>
        {
          isOpen &&
            <div styleName="container">
              <ul styleName="nav-list">
                <li>
                  <Link to ='/list'>List Maker</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
              </ul>
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps)(CSSModules(NavBar, styles));