import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Header from '../components/Header';
// import NavBar from '../components/NavBar';
import { bindClassMethods } from '../utils/commonUtil';
import '../assets/stylesheets/base.scss';
import Hvrnk from '../components/playground/Hvrnk';
import { container } from '../assets/styles/playground/app.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalDeltaX: 0
    };

    bindClassMethods.call(this, 'onWheel', 'getContainerStyles');
  }

  onWheel(event) {
    const deltaX = Math.abs(event.deltaX);
    let { totalDeltaX } = this.state;
    totalDeltaX += deltaX;

    this.setState({ totalDeltaX });
  }

  getContainerStyles(deltaX) {
    const updateObject = {};

    if (deltaX > 25) {
      const newOpacity = 1 - (0.02 * (deltaX - 25));
      updateObject.opacity = newOpacity;
    }

    return Object.assign({}, container, updateObject);
  }

  render() {
    const { totalDeltaX } = this.state;
    const containerStyle = this.getContainerStyles(totalDeltaX);
    return (
      <div style={containerStyle} onWheel={this.onWheel}>
        <Hvrnk deltaX={totalDeltaX} />
      </div>
    );
  }
}

export default App;

// const App = React.createClass({
//   displayName: 'App',
//
//   render() {
//     return (
//       <div style={divStyle}>
//         <Hvrnk />
//         {this.props.children}
//       </div>
//     );
//   },
//
//   propTypes: {
//     children: PropTypes.object
//   }
// });
//
// function mapStateToProps(state) {
//   return state;
// }
//
// export default connect(mapStateToProps)(App);
