import React from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import signIn from './screens/signIn'
import calculator from './screens/calculator'
import searchResults from './screens/searchResults'

const store = configureStore();
const { SignIn } = signIn.components
const { Calculator } = calculator.components
const { SearchResults } = searchResults.components


class SnackSum extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <SearchResults />
      </Provider>
    )
  }
}

export default SnackSum;
