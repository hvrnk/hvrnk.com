import * as actionTypes from '../actions/listActions';

const initialState = [];

export default function list(state = initialState, action) {
  switch (action.type) {
  case actionTypes.ADD_ITEM:
    return [ ...state, action.item ];
  default:
    return state;
  }
}