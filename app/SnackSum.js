import React from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import signIn from './screens/signIn'

const store = configureStore();
const { SignIn } = signIn.components


class SnackSum extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <SignIn />
      </Provider>
    )
  }
}

export default SnackSum;
