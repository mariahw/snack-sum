import * as types from './actionTypes';
import * as constants from './constants';
const initialState = {
  username: {},
  userpassword:{}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case types.VALIDATE_NEW_USERNAME:
      return Object.assign({}, state, { username:  action.payload});

    case types.VALIDATE_NEW_PASSWORD:
      return Object.assign({}, state, { userpassword: action.payload});

    case types.SUBMIT_NEW_USER:
      return state;

    default:
      return state;
  }
}
