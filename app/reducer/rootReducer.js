import { combineReducers } from 'redux';
import signIn from '../screens/signIn/';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  form: formReducer,
  [signIn.constants.NAME]: signIn.reducer
});

export default rootReducer;
