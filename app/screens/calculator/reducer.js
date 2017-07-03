import * as types from './actionTypes';
import * as constants from './constants';

const initialState = {
  userinput: [],
  ui:{
    calculatorValues: {
      doughnut: {
        active: "false",
      },
      cake: {
        active: "false",
      },
      cupcake: {
        active: "false",
      },
      milkShake: {
        active: "false",
      },
      cookie: {
        active: "false",
      },
      iceCream: {
        active: "false",
      },
      macaroon: {
        active: "false",
      },
      candy: {
        active: "false",
      },
      popcorn: {
        active: "false",
      },
    }
  }

}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case types.CALCULATOR_INPUT:
      return {
        ...state,
        userinput: [...state.userinput,  action.payload]
      }

    case types.CALCULATOR_CLEAR:
    return {
      ...state,
      userinput: [ ]
    }

    case types.CALCULATOR_SUBMIT:
    return Object.assign({}, state, {
      username: action.payload.email,
      userpassword: action.payload.password,
    });

    default:
      return state;
  }
}
