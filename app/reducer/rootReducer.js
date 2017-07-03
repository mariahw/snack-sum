import { combineReducers } from 'redux';
import signIn from '../screens/signIn/';
import calculator from '../screens/calculator/';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  form: formReducer,
  [signIn.constants.NAME]: signIn.reducer,
  [calculator.constants.NAME]: calculator.reducer
});

export default rootReducer;
