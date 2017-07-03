import * as types from './actionTypes';
import * as constants from './constants';

const initialState = {
  username: {},
  userpassword: {},
  ui: {
    usernameFieldIdle: "true",
    userpasswordFieldIdle: "true",
    submitButtonActive: "false"
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case types.VALIDATE_NEW_USERNAME:
      return Object.assign({}, state, { username:  action.payload});

    case types.VALIDATE_NEW_PASSWORD:
      return Object.assign({}, state, { userpassword: action.payload});

    case types.SUBMIT_NEW_USER:
    return Object.assign({}, state, {
      username: action.payload.email,
      userpassword: action.payload.password,
    });

    default:
      return state;
  }
}
