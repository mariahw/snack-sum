import * as types from './actionTypes';

export function buttonInput(buttonVal) {
    return {
        type: types.CALCULATOR_INPUT,
        payload: buttonVal
    };
}

export function buttonActive(buttonVal) {
    return {
        type: types.BUTTON_ACTIVE,
        payload: buttonVal
    };
}


export function submitCalculatorSearch(newUserObject) {
    console.log(newUserObject)
    return {
        type: types.SUBMIT_NEW_USER,
        payload: newUserObject
    };
}
