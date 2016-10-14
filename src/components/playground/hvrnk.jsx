import React, { Component } from 'react';
import { bindClassMethods } from '../../utils/commonUtil';
import { hvrnk } from '../../assets/styles/playground/hvrnk';

const maxScroll = 100;
const initialTop = 40;
const initialFontSize = 9;
const minimumFontSize = 2;

class Hvrnk extends Component {
  constructor(props) {
    super(props);

    bindClassMethods.call(this, 'getStyleObject');
  }

  getStyleObject() {
    const updateObject = {};
    const { deltaX } = this.props;
    let newTopValue = initialTop - ((initialTop / maxScroll) * deltaX);
    if (newTopValue < 0) {
      newTopValue = 0;
      // updateObject.position = 'fixed';
      // updateObject.left = '50vh';
    }
    
    let newFontSize = initialFontSize - ((initialFontSize / maxScroll) * deltaX);
    if (newFontSize < 2) {
      newFontSize = 2;
    }
    updateObject.fontSize = newFontSize + 'em';
    

    // if (deltaX > 50) {
    //
    //   let newMarginLeft = deltaX - 50;
    //
    //   updateObject.marginLeft = '-' + newMarginLeft + 'vw';
    // }

    // if (deltaX > 50) {
    // }

    updateObject.top = newTopValue + 'vh';

    return Object.assign({}, hvrnk, updateObject);
  }

  render() {
    const style = this.getStyleObject();
    console.log(style.top);
    return (<div style={style}>hvrnk</div>)
  }
}

Hvrnk.propTypes = {
  deltaX: React.PropTypes.number
};

export default Hvrnk;