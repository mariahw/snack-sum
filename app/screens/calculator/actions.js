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


export function clearCalculatorSearch(buttonVal) {
    return {
        type: types.CALCULATOR_CLEAR,
        payload: buttonVal
    };
}

export function submitCalculatorSearch(userSearchQuery) {
    return {
        type: types.CALCULATOR_SUBMIT,
        payload: userSearchQuery
    };
}
