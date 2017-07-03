import * as types from './actionTypes';

export function submitUser(newUserObject) {
    console.log(newUserObject)
    return {
        type: types.SUBMIT_NEW_USER,
        payload: newUserObject
    };
}
