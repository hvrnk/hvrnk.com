import * as actionTypes from '../actions/navActions';

const initialState = {
  isOpen: false
};

export default function nav(state = initialState, action) {
  switch (action.type) {
  case actionTypes.TOGGLE_NAV:
    return Object.assign({}, state, { isOpen: !state.isOpen });
  default:
    return state;
  }
}