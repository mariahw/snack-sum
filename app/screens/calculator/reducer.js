import * as types from './actionTypes';
import * as constants from './constants';

const initialState = {
  userinput: [],
  ui:{
    calculatorValues: {
      doughnut: {
        active: false,
      },
      cake: {
        active: false,
      },
      cupcake: {
        active: false,
      },
      milkshake: {
        active: false,
      },
      cookie: {
        active: false,
      },
      icecream: {
        active: false,
      },
      macaroon: {
        active: false,
      },
      candy: {
        active: false,
      },
      popcorn: {
        active: false,
      },
    }
  }

}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case types.CALCULATOR_INPUT:
      return {
          ...state,
          userinput: state.userinput.concat(action.payload),
      }

    case types.CALCULATOR_CLEAR:
    return {
      ...state,
      userinput: [ ]
    }

    case types.BUTTON_ACTIVE:
    return {
      ...state,
      ui: {
        ...state.ui,
        calculatorValues: {
          ...state.ui.calculatorValues,
          [action.payload]: {
            ...state.ui.calculatorValues[action.payload],
            active: !(state.ui.calculatorValues[action.payload].active)
          }
        }
      }
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
